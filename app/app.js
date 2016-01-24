import angular from 'angular';
import ngMaterial from 'angular-material';

require('angular-material/angular-material.scss');
require('./app.scss');

angular.module('app', [ngMaterial]);
console.log('here1');

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
