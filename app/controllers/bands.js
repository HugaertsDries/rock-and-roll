import Controller from '@ember/controller';
import {action} from '@ember/object';
import {empty} from '@ember/object/computed';

import Band from 'rock-and-roll/models/band';

export default Controller.extend({
  isAddingBand: false,
  newBandName: '',
  isAddButtonDisabled: empty('newBandName'),


  toggleAddBand: action(function () {
    this.set('isAddingBand', !this.isAddingBand);
  }),

  saveBand: action(function (event) {
    event.preventDefault(); // IMPORTANT TO BLOCK UNWANTED BEHAVIOR
    let newBand = Band.create({
      name: this.newBandName,
      slug: this.newBandName.toLocaleLowerCase().replace(' ', '-')
    });

    this.model.pushObject(newBand);
    this.set('newBandName', '');
    // this.toggleAddBand();
  })
});
