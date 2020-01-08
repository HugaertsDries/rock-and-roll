import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  router: service(),

  // Will run before the model is loaded in
  beforeModel() {
    this.router.transitionTo('bands');
  }
});
