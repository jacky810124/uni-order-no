const passwordGenerator = require('generate-password');
const moment = require('moment');

module.exports = {
  generate(options) {

    let opt = { uppercase: false, length: 6, };

    if (options && Object.keys(options).filter(key => options[key] !== undefined).length > 0) {

      opt = Object.assign({}, opt, {
        length: options.length,
      });

    }

    const utcDateTime = moment.utc().format('YYYYMMDDHHmmss');
    const uid = passwordGenerator.generate(opt);

    return `${utcDateTime}${uid}`;
  }
};
