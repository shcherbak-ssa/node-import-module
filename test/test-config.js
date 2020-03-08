'use strict';

const config = {
  configFiles: {
    user: './components/user/exports.nim.js',
    project: './components/project/exports.nim.js'
  },
  filesContent: {
    user: {
      create: 'create-user',
      delete: 'delete-user',
    },
    project: {
      create: 'create-project',
      delete: 'delete-project',
    }
  }
};

module.exports = config;