module.exports = function(){

  var Sorter = require('./Sorter');

  var Resizer = require('./Resizer');

  return {
    /**
     * Name of the module
     * @type {String}
     * @private
     */
    name: 'Utils',

    /**
     * Initialize module
     */
    init: function() {
      return this;
    },

    Sorter: Sorter,

    Resizer: Resizer,
  };
};
