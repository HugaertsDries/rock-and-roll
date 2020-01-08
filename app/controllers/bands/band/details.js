import Controller from '@ember/controller';
import {action} from '@ember/object';

export default Controller.extend({
  isEditing: false,

  toggleIsEditing: action(function() {
    // helper function to toggle props
    this.toggleProperty('isEditing');
  })
});
