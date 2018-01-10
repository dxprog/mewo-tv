const { UPnpBroadcastResponder } = require('mewo');

const DEFAULT_CONFIG = {
  port: 1900,
  iface: 'eth1',
  multicastAddress: '239.11.3.8'
};

module.exports = function(config = {}) {
  config = Object.assign({}, DEFAULT_CONFIG, config);
  const responder = new UPnpBroadcastResponder();
  return responder.init(config).then(() => responder);
};