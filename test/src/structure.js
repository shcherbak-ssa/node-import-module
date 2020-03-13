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
        'launcher.js': 'module.exports = \'launcher\';',
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
  },
  global: {
    modules: {
      'string-global.js': 'module.exports = \'global\';',
      'boolean-global.js': 'module.exports = true;',
      'object-global.js': 'module.exports = {name: \'global\'};'
    },
    'global.exports.js': `module.exports = {
      id: '$',
      exports: {
        'string-global': './modules/string-global.js',
        'boolean-global': './modules/boolean-global.js',
        'object-global': './modules/object-global.js'
      }
    }`
  }
};

module.exports = testStructure;