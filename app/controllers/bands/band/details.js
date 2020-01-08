import Controller from '@ember/controller';
import {action} from '@ember/object';

export default Controller.extend({
  isEditing: false,

  edit: action(function () {
    this.set('isEditing', true);
  }),

  save: action(async function () {
    // no need to set new description as this was hooked directly in the template
    let band = this.model;
    await band.save();
    this.set('isEditing', false);
  }),

  toggleIsEditing: action(function () {
    // helper function to toggle props
    this.toggleProperty('isEditing');
  })
});
