import Route from '@ember/routing/route';

export default Route.extend({
  /**
   * By default the model of the parent is provided
   *
   */
  model() {
    return this.modelFor('bands.band');
  }
});
