import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test-контраагенты-l');
  this.route('i-i-s-test-контраагенты-e',
  { path: 'i-i-s-test-контраагенты-e/:id' });
  this.route('i-i-s-test-контраагенты-e.new',
  { path: 'i-i-s-test-контраагенты-e/new' });
  this.route('i-i-s-test-номенкалтура-l');
  this.route('i-i-s-test-номенкалтура-e',
  { path: 'i-i-s-test-номенкалтура-e/:id' });
  this.route('i-i-s-test-номенкалтура-e.new',
  { path: 'i-i-s-test-номенкалтура-e/new' });
  this.route('i-i-s-test-тест-l');
  this.route('i-i-s-test-тест-e',
  { path: 'i-i-s-test-тест-e/:id' });
  this.route('i-i-s-test-тест-e.new',
  { path: 'i-i-s-test-тест-e/new' });
});

export default Router;
