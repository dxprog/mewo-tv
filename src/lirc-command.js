const { execSync } = require('child_process');
const { msleep } = require('sleep');

const KEY_PRESS_SLEEP = 500;

module.exports = function lircCommand(deviceName, keyPresses) {
  keyPresses.forEach(keyName => {
    console.log(`Sending IR command: ${deviceName} ${keyName}`);
    execSync(`irsend send_once ${deviceName} ${keyName}`);
    msleep(KEY_PRESS_SLEEP);
  });
};