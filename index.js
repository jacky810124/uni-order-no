const shortid = require('shortid');
const moment = require('moment');

module.exports = {
  generate() {

    const utcDateTime = moment.utc().format('YYYYMMDDHHmmss');
    const uid = shortid.generate();

    const orderNo = `${utcDateTime}${uid}`;

    return orderNo;
  }
};
