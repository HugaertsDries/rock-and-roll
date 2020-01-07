import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  // bands
  this.route('bands', function () {
    // bands.band
    // dynamic route, has a slug
    this.route('band', { path: ':slug' }, function () {
      // bands.band.songs
      this.route('songs');
    });
  });

});

export default Router;
