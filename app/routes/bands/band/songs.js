import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        let band = this.modelFor('bands.band');
        return band;
    }
});
