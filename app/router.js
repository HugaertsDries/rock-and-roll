import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,

  // constructor
  init() {
    this._super();
    this.setDocumentTitle();
  },

  setDocumentTitle() {
    // EVENT LISTENER
    this.on('routeDidChange', (transition) => {
      let toRouteName = transition.to.name;
      let pageTitles = {
        'bands.index': () => {
          return 'Bands';
        },
        'bands.band.songs': () => {
          let bandRouteInfo = transition.to.find(info => info.name.includes('bands.band'));
          let bandSlug = bandRouteInfo.params.slug;
          let bandName = bandSlug.split('-').map(s => s.capitalize()).join(' ');
          return `${bandName} songs`;
        }
      };
      let titleSegments = [];
      let titleSetter = pageTitles[toRouteName];
      if (titleSetter) {
        titleSegments.push(titleSetter());
      }
      titleSegments.push('Rock and Roll with Ember.js');
      document.title = titleSegments.join(' - ');
    });
  }
});

Router.map(function () {
  // bands
  this.route('bands', function () {
    // bands.band
    // dynamic route, has a slug
    this.route('band', {path: ':slug'}, function () {
      // bands.band.songs
      this.route('songs');
      this.route('details');
    });
  });
});

export default Router;
