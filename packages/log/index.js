
const version = +process.versions.node.split('.')[0];
module.exports = version >= 7 ? require('./lib/es2017') : require('./lib/es2015');