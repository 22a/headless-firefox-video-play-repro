import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
// import { registerWaiter } from '@ember/test';
import ENV from 'headless-firefox-video-play/config/environment';

export default class MyVideoPlayerComponent extends Component {
  @tracked
  videoIsLoading = false;

  @action
  playVideo() {
    const videoElement = document.getElementById('video-element');
    videoElement.muted = true;
    const videoPlayPromise = videoElement.play();
    if (ENV.environment === 'test') {
      this.videoIsLoading = true;
      videoPlayPromise.finally(() => {
        this.videoIsLoading = false;
      });
      // // eslint-disable-next-line ember/no-legacy-test-waiters
      // registerWaiter(() => {
      //   // console.log(
      //   //   'Evaluating test waiter',
      //   //   new Date().toLocaleTimeString(),
      //   //   new Date() % 1000
      //   // );
      //   return !this.videoIsLoading;
      // });
    }
  }
}
