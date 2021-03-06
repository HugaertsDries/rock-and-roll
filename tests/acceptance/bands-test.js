import {module, test} from 'qunit';
import {visit, click} from '@ember/test-helpers';
import {createBand} from 'rock-and-roll/tests/helpers/custom-helpers';
import {setupApplicationTest} from 'ember-qunit';
import {setupMirage} from 'ember-cli-mirage/test-support';

module('Acceptance | Bands', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting "/" should load a list of bands', async function (assert) {
    // creating and setting mock data using Mirage
    this.server.logging = true;
    this.server.create('band', {name: 'Radiohead'});
    this.server.create('band', {name: 'Long Distance Calling'});

    // visiting "/"
    await visit('/');

    assert.dom('[data-test-rr=band-link]').exists({count: 2}, 'All band links are rendered');
    assert.dom('[data-test-rr=band-list-item]:first-child').hasText("Radiohead", 'The first band link contains the band name');
    assert.dom('[data-test-rr=band-list-item]:last-child').hasText("Long Distance Calling", 'The other band link contains the band name');
  });

  test('visiting "/" we should be able to create a new band', async function (assert) {
    this.server.logging = true;
    this.server.create('band', {name: 'Royal Blood'});

    // DONT FORGET AWAIT!!!!
    await visit('/');
    await createBand("Caspian");

    assert.dom('[data-test-rr=band-list-item]').exists({count: 2}, 'A new band link is rendered');
    assert.dom('[data-test-rr=band-list-item]:last-child').hasText('Caspian', 'The new band link is rendered as the last item');
    assert.dom('[data-test-rr=songs-nav-item] > .active').exists('The Songs tab is active');
  });

  test('Sort songs in various ways', async function (assert) {
    let band = this.server.create('band', {name: 'Them Crooked Vultures'});
    this.server.logging = true;
    this.server.create('song', {title: 'Elephants', rating: 5, band});
    this.server.create('song', {title: 'New Fang', rating: 4, band});
    this.server.create('song', {title: 'Mind Eraser, No Chaser', rating: 4, band});
    this.server.create('song', {title: 'Spinning in Daffodils', rating: 5, band});

    await visit('/');
    await click('[data-test-rr=band-link]');

    assert.dom('[data-test-rr=song-list-item]:first-child').hasText('Elephants', 'The first song is the highest ranked, first one in the alphabet');
    assert.dom('[data-test-rr=song-list-item]:last-child').hasText('New Fang', 'The last song is the lowest ranked, last one in the alphabet');
  });
});
