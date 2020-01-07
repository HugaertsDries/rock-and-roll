import Controller from '@ember/controller';
import {action} from '@ember/object';
import {empty} from '@ember/object/computed';

import Song from 'rock-and-roll/models/song';

export default Controller.extend({
  isAddingSong: false,
  newSongTitle: '',
  isAddSongButtonDisabled: empty('newSongTitle'),


  toggleAddSong: action(function () {
    this.set('isAddingSong', !this.isAddingSong);
  }),

  saveSong: action(function (event) {
    event.preventDefault(); // IMPORTANT TO BLOCK UNWANTED BEHAVIOR
    let newSong = Song.create({
      title: this.newSongTitle,
    });

    this.model.songs.pushObject(newSong);
    this.set('newSongTitle', '');
    // this.toggleAddSong();
  })
});
