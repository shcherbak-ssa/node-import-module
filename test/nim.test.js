'use strict';

/**
 *   I know it looks awful
 */

const mocha = require('mocha');
const {expect} = require('chai');

const testStructure = require('./src/structure');
const {createFileStructure, deleteFileStructure} = require('./src/utils');

const {
  CREATE_APP_CONTENT,
  APP_CONFIG_CONTENT,
  LAUNCHER_CONTENT
} = require('./src/files-content');

const {
  EXPECT_APP_CONFIG_FILE_PATH,
  EXPECT_USER_CONFIG_FILE_PATH,
  EXPECT_PROJECT_CONFIG_FILE_PATH,
  EXPECT_PRODUCT_CONFIG_FILE_PATH
} = require('./src/expect-paths');

const Launcher = require('../src/launcher');
let configFiles = {};

describe('Test node-import-module package', () => {
  before(() => {
    createFileStructure(testStructure);

    const launcher = new Launcher();
    configFiles = launcher._initConfigFiles(__dirname);
  });
  after(() => { deleteFileStructure() });

  describe('Test config files search', () => {
    it('found app config file', () => {
      const foundAppConfigFilePath = configFiles.getPath('app');
      expect(foundAppConfigFilePath).to.equal(EXPECT_APP_CONFIG_FILE_PATH);
    });

    it('found user config files', () => {
      const foundUserConfigFilePath = configFiles.getPath('user');
      expect(foundUserConfigFilePath).to.equal(EXPECT_USER_CONFIG_FILE_PATH);
    });

    it('the product config file is undefined', () => {
      const foundProductConfigFilePath = configFiles.getPath('product');
      expect(foundProductConfigFilePath).to.equal(undefined);  
    });

    it('found two project config file', () => {
      const foundProjectConfigFilePath = configFiles.getPath('project');
      expect(foundProjectConfigFilePath).to.be.an('array').with.lengthOf(2);
    });
  });
});