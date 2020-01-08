import Route from '@ember/routing/route';

export default Route.extend({
    resetController(controller) {
      controller.setProperties({
        isAddingSong: false,
        newSongTitle: '',
      })
    },

    model() {
        let band = this.modelFor('bands.band');
        return band;
    }
});
