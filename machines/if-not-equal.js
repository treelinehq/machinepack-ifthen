module.exports = {


  friendlyName: 'If not equal... (!==)',


  description: 'Determine whether the first value is not equivalent to the second.',


  extendedDescription: 'Note that this machine performs a deep equality check by value.  That is, it doesn\'t care about memory addresses or things like that-- it\'s only interested in the actual semantic value of the data.  Basically, this is like what you would get if you stringified two JSON values and compared the resulting strings.',


  sideEffects: 'cacheable',


  sync: true,


  inputs: {

    a: {
      friendlyName: 'First value',
      description: 'The first value to check (expected to not be equal to the second).',
      extendedDescription: 'A value of any type may be provided.',
      example: '===',
      required: true
    },

    b: {
      friendlyName: 'Second value',
      description: 'The second value to check (expected to not be equal to the first).',
      extendedDescription: 'A value of any type may be provided.',
      example: '===',
      required: true
    }

  },


  exits: {

    success: {
      description: 'The first value is not equal to the second.'
    },

    otherwise: {
      friendlyName: 'Else',
      description: 'The first value IS equal to the second.'
    }

  },


  fn: function(inputs, exits, env) {

    // Import `lodash`.
    var _ = require('lodash');

    // If the two input values are semantically equal, return through `otherwise`.
    if (_.isEqual(inputs.a, inputs.b)) {
      return exits.otherwise();
    }

    // Otherwise return through `success`.
    return exits.success();
  }

};
