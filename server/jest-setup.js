process.env.EXPRESS_PORT = 33210;
module.exports = () => {
  // eslint-disable-next-line global-require
  global.testServer = require('./index');
};
