import {module, test} from 'qunit';
import {setupTest} from 'ember-qunit';

module('Unit | Controller | bands/band/songs', function (hooks) {
  setupTest(hooks);

  test('isAddButtonDisabled', function (assert) {
    let controller = this.owner.lookup('controller:bands/band/songs');
    assert.ok(controller);

    assert.ok(controller.get('isAddSongButtonDisabled'), 'The button is disabled when loaded initially');

    controller.set('newSongTitle', 'Belenos');
    assert.notOk(controller.get('isAddSongButtonDisabled'), 'The button is not disabled when there is a title');

    controller.set('newSongTitle', '');
    assert.ok(controller.get('isAddSongButtonDisabled'), 'The button is disabled when the title is empty');
  });
});
