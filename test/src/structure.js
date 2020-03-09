'use strict';

const {
  CREATE_APP_CONTENT,
  APP_CONFIG_CONTENT,
  LAUNCHER_CONTENT
} = require('./files-content');

function getExportsConfigFileContent(id, exports = {}) {
  return `module.exports = { id: '${id}', exports: ${JSON.stringify(exports)} };`
}
function getExportsConfigFileContentWithoutID() {
  return 'module.exports = { exports: {} };'
}
function getFileContent(content) {
  return `module.exports = ${content};`
}

const testStructure = {
  components: {
    app: {
      actions: {
        'create-app.js': getFileContent(CREATE_APP_CONTENT)
      },
      config: {
        'app-config.json': getFileContent(JSON.stringify(APP_CONFIG_CONTENT))
      },
      launcher: {
        'launcher.js': getFileContent(LAUNCHER_CONTENT),
        'index.js': 'module.exports = require(\'./launcher\');'
      },
      'app.nim.js': getExportsConfigFileContent(
        'app',
        {
          launcher: './launcher',
          config: './config/add-config.json',
          create: './actions/create-app.js'
        }
      )
    },
    user: {
      'user.nim.js': getExportsConfigFileContentWithoutID()
    },
    project: {
      'project.nim.js': getExportsConfigFileContent('project')
    },
    product: {
      'product.nim.js': getExportsConfigFileContent('project')
    }
  }
};

module.exports = testStructure;