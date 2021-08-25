import Application from 'headless-firefox-video-play/app';
import config from 'headless-firefox-video-play/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

// Reduce the individual test timeout to 10s from 60s because
// HTMLMediaElement.play() should be almost instant under normal circumstances
// and this means we I don't have to wait a minute to reproduce it
QUnit.config.testTimeout = 10000;

setup(QUnit.assert);

start();
