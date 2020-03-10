'use strict';

const testStructure = {
  components: {
    app: {
      actions: {
        'create-app.js': 'module.exports = true;'
      },
      config: {
        'app-config.json': '{"name": "node-import-module"}'
      },
      launcher: {
        'launcher.js': `module.exports = 'launcher';`,
        'index.js': 'module.exports = require(\'./launcher\');'
      },
      'app.exports.js': `module.exports = {
                      id: 'app',
                      exports: {
                        launcher: './launcher',
                        config: './config/app-config.json',
                        create: './actions/create-app.js'
                      }
                    };`
    }
  }
};

module.exports = testStructure;