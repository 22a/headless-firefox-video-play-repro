import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, find } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | my-video-player', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<MyVideoPlayer />`);
    assert.ok(true);
  });

  test('clicking the play button plays the video', async function (assert) {
    await render(hbs`<MyVideoPlayer />`);
    await click('#video-play-button');
    assert.false(find('#video-element').paused, 'The video is not paused');
  });
});
