'use strict';

var shortid = require('shortid');
var moment = require('moment');

module.exports = {
  generate: function generate() {

    var utcDateTime = moment.utc().format('YYYYMMDDTHHmmss');
    var uid = shortid.generate();

    var orderNo = '' + utcDateTime + uid;

    return orderNo;
  }
};
