const shortid = require('shortid');
const moment = require('moment');

module.exports = {
  generate() {

    const utcDateTime = moment.utc().format('YYYYMMDDTHHmmss');
    const uid = shortid.generate();

    const orderNo = `${utcDateTime}${uid}`;

    return orderNo;
  }
};
