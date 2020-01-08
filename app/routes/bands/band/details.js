import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
  router: service(),

  init() {
    this._super();
    this.listeners();
  },

  /**
   * By default the model of the parent is provided
   * thus this does not need to be implemented
   */
  model() {
    return this.modelFor('bands.band');
  },

  listeners() {
    this.onRouterWillChange();
  },

  onRouterWillChange() {
    this.router.on('routeWillChange', (transition) => {
      if (!transition.from) {
        // to prevent from firing on initial load
        return;
      }
      if (transition.to.name === transition.from.name) {
        /**
         * aborting a transition also fires a routeWillChange.
         * that is why we return here.
         */
        return;
      }
      let controller = this.controller;
      if (controller && controller.isEditing) {
        let leave = window.confirm('Are you sure?');
        if (!leave) {
          transition.abort();
        } else {
          // controller.set('isEditing', false);
        }
      }
    });
  },

  resetController(controller) {
    controller.setProperties({
      isEditing: false
    });
  }
});
