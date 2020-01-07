import Controller from '@ember/controller';
import { action } from '@ember/object';

export default Controller.extend({
    isAddingBand: false,
    newBandName: '',

    toggleAddBand: action(function () {
        this.set('isAddingBand', !this.isAddingBand);
    }),

    saveBand: action(function () {
        alert(`saving ${this.newBandName}...`);
        // create a new band
    })
});
