'use strict';

const {getFileContent, getExportsFileContent} = require('./utils');
const {filesContent} = require('../test-config');

module.exports = {
  components: {
    user: {
      actions: {
        'create-user.js': getFileContent(filesContent.user.create),
        'delete-user.js': getFileContent(filesContent.user.delete)
      },
      'exports.nim.js': getExportsFileContent('user')
    },
    project: {
      actions: {
        rest: {
          'create-project.js': getFileContent(filesContent.project.create),
          'delete-project.js': getFileContent(filesContent.project.delete)
        }
      },
      'exports.nim.js': getExportsFileContent('project')
    }
  }
}