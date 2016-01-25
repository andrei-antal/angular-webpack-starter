import angular from 'angular';
import ngMaterial from 'angular-material';

require('angular-material/angular-material.scss');
require('./app.scss');

angular.module('app', [ngMaterial]).run(() => {
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
