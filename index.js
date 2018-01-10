const responder = require('./src/responder');
const TvCommandDevice = require('./src/tv-command-device');
const config = require('./config');

responder().then(responder => {
  const lircDeviceName = config['lirc-device'];
  config.commands.forEach(command => {
    console.log(`Creating device ${command.name}`);
    const tvCommandDevice = new TvCommandDevice({
      upnpDeviceName: command.name,
      responder,
      lircDeviceName,
      buttonConfig: command
    });
    responder.registerDevice(tvCommandDevice);
  });
});