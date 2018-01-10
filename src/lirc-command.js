const { execSync } = require('child_process');
const { msleep } = require('sleep');

const DEFAULT_KEY_PRESS_SLEEP = 500;

module.exports = function lircCommand(deviceName, keyPresses) {
  keyPresses.forEach(keyName => {
    // See if there's a custom sleep duration
    let sleepDuration = keyName.split(':');
    sleepDuration = sleepDuration.length > 1 ? parseInt(sleepDuration[1]) : DEFAULT_KEY_PRESS_SLEEP;
    console.log(`Sending IR command: ${deviceName} ${keyName}, sleeping ${sleepDuration}`);
    execSync(`irsend send_once ${deviceName} ${keyName}`);
    msleep(sleepDuration);
  });
};