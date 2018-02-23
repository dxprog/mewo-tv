const { MeWoDevice } = require('mewo');
const lircCommand = require('./lirc-command');

module.exports = class TvCommandDevice extends MeWoDevice {
  constructor({ 
    upnpDeviceName, 
    responder, 
    lircDeviceName, 
    savedPort,
    buttonConfig } = config
  ) {
    super(upnpDeviceName, responder, { port: savedPort });
    this.lircDeviceName = lircDeviceName;
    this.onCommands = buttonConfig.on || [];
    this.offCommands = buttonConfig.off || [];
  }

  on() {
    return new Promise(resolve => {
      lircCommand(this.lircDeviceName, this.onCommands);
      resolve();
    });
  }

  off() {
    return new Promise(resolve => {
      lircCommand(this.lircDeviceName, this.offCommands);
      resolve();
    });
  }
};