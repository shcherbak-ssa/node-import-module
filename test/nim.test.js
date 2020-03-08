'use strict';

/**
 *   I know it looks awful
 */

const mocha = require('mocha');
const assert = require('assert');
const config = require('./test-config');
const structure = require('./src/structure');

const {
  setTestConfigFilePaths,
  createFileStructure,
  deleteFileStructure
} = require('./src/utils');

const Launcher = require('../src/launcher');

describe('Test node-import-module package', () => {
  before(() => {
    setTestConfigFilePaths(__dirname, config);
    createFileStructure(structure);
  });

  describe('Test launcher', () => {
    it('normal way', () => {
      const launcher = new Launcher();
      const configFiles = launcher._initConfigFiles(__dirname);
  
      assert.equal(configFiles.getPath('user'), config.configFiles.user);
      assert.equal(configFiles.getPath('project'), config.configFiles.project);
    });
  });

  after(() => {
    deleteFileStructure();
  })
});