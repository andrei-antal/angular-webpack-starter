import angular from 'angular';

require('./app.scss');

angular.module('app', []).run(() => {
  console.log('Angular runs');
});

/*eslint-disable */

// sample tests
if (RUN_TEST) {
  describe('a test suite', () => {
    it('should pass', () => {
      expect(true).to.be.true;
    });

    it('should fail', () => {
      expect(true).to.be.false;
    });
  });
}
/*eslint-enable */
