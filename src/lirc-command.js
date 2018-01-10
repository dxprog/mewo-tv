const { execSync } = require('child_process');
const { msleep } = require('sleep');

const DEFAULT_KEY_PRESS_SLEEP = 500;

module.exports = function lircCommand(deviceName, keyPresses) {
  keyPresses.forEach(keyCommand => {
    // Split the key name from any custom sleep duration
    const keyTokens = keyCommand.split(':');
    const keyName = keyTokens.shift();
    const sleepDuration = keyTokens.shift() || DEFAULT_KEY_PRESS_SLEEP;

    console.log(`Sending IR command: ${deviceName} ${keyName}, sleeping ${sleepDuration}`);
    execSync(`irsend send_once ${deviceName} ${keyName}`);
    msleep(sleepDuration);
  });
};