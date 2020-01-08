import {module, test} from 'qunit';
import {visit, click, fillIn} from '@ember/test-helpers';
import {setupApplicationTest} from 'ember-qunit';
import {setupMirage} from 'ember-cli-mirage/test-support';

module('Acceptance | Bands', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting "/" should load a list of bands', async function (assert) {
    // creating and setting mock data using Mirage
    this.server.create('band', {name: 'Radiohead'});
    this.server.create('band', {name: 'Long Distance Calling'});

    // visiting "/"
    await visit('/');

    let bandLinks = document.querySelectorAll('.rr-band-link');
    assert.equal(bandLinks.length, 2, 'All band links are rendered');
    assert.ok(bandLinks[0].textContent.includes('Radiohead'), 'First band link contains the band name');
    assert.ok(bandLinks[1].textContent.includes('Long Distance Calling'), 'The other band link contains the band name');
  });

  test('visiting "/" we should be able to create a new band', async function (assert) {
    this.server.create('band', {name: 'Royal Blood'});

    await visit('/');
    // clicking an element
    await click('label');
    // filling an the input field
    await fillIn('.rr-input', 'Caspian');
    await click('.rr-action-button');

    let bandLinks = document.querySelectorAll('.rr-band-link');
    assert.equal(bandLinks.length, 2, 'All band links are rendered');
    assert.ok(bandLinks[1].textContent.includes('Caspian'), 'New band link rendered');
    assert.ok(document
      .querySelector('.rr-navbar-item > .active')
      .textContent.includes('Songs'), 'The Songs tab for the new Band is active');
  });
});
