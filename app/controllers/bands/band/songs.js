import Controller from '@ember/controller';
import {action} from '@ember/object';
import {empty} from '@ember/object/computed';

export default Controller.extend({
  isAddingSong: false,
  newSongTitle: '',
  isAddSongButtonDisabled: empty('newSongTitle'),


  toggleAddSong: action(function () {
    this.set('isAddingSong', !this.isAddingSong);
  }),

  saveSong: action( async function (event) {
    event.preventDefault(); // IMPORTANT TO BLOCK UNWANTED BEHAVIOR

    let newSong = this.store.createRecord('song', {
      title: this.get('newSongTitle'),
      band: this.model
    });

    await newSong.save();
    this.set('newSongTitle', '');

  }),

  updateRating: action(function (song, newRating) {
    song.set('rating', song.rating === newRating ? 0 : newRating);
  })
});
