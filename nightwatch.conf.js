var path = require('path')

const BINPATH = path.join(process.cwd(), 'bin'); // change if required.

module.exports = {
  "src_folders": [
    "tests"
  ],
  "output_folder": "reports",
  "selenium": {
    "start_process": true,
    "server_path": path.join(BINPATH, "selenium.jar"),
    "host": "127.0.0.1",
    "port": 4444, // standard selenium port
    "cli_args": { // chromedriver is downloaded by selenium-download (see readme)
      "webdriver.chrome.driver" : path.join(BINPATH, "chromedriver")
    }
  },
  "test_settings": {
    "default": {
      "screenshots": {
        "enabled": true, // if you want to keep screenshots
        "path": './screenshots/' // save screenshots here
      },
      "globals": {
        "waitForConditionTimeout": 5000 // sometimes internet is slow so wait.
      },
      "desiredCapabilities": { // use Chrome as the default browser for tests
        "browserName": "chrome"
      }
    },
    "chrome": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true // set to false to test progressive enhancement
      }
    }
  }
};

/**
 * selenium-download does exactly what it's name suggests;
 * downloads (or updates) the version of Selenium (& chromedriver)
 * on your localhost where it will be used by Nightwatch.
 */
var selenium = require('selenium-download');

selenium.ensure(BINPATH, function(error) {
  if (error) throw new Error(error); // no point continuing so exit!
  console.log('✔ Selenium & Chromedriver successfully updated');
});