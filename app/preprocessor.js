// preprocessor.js
var ReactTools = require('react-tools');
module.exports = {
  process: function(src) {
    console.log('hi james');
    return ReactTools.transform(src);
  }
};
