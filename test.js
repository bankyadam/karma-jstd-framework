'use strict';

const assert = require('assert');

const framework = require('./main');
const frameworkElement = framework['framework:jstd'];

((frameworkElement) => {
  assert.ok(frameworkElement instanceof Array);
  assert.equal(frameworkElement[0], 'factory');
  assert.deepEqual(frameworkElement[1].$inject, ['config.files']);
})(frameworkElement);

((frameworkElement) => {
  const files = [];
  frameworkElement[1](files);

  assert.deepEqual(files, [{
    pattern: `${__dirname}/node_modules/@caplin/karma-jstd-adapter/jstd-adapter.js`,
    included: true,
    served: true,
    watched: false
  }]);
})(frameworkElement)
