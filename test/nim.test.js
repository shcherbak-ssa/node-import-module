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
  before('file structure creation', () => {
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

  describe('Test import function', () => {
    it('user component', () => {
      const importModule = require('../nim');
      const createUserAction = importModule('user', 'create');
      const deleteUserAction = importModule('user', 'delete');

      assert.equal(createUserAction, config.filesContent.user.create);
      assert.equal(deleteUserAction, config.filesContent.user.delete);
    });
    it('project component', () => {
      const importModule = require('../nim');
      const createProjectAction = importModule('project', 'create');
      const deleteProjectAction = importModule('project', 'delete');

      assert.equal(createProjectAction, config.filesContent.project.create);
      assert.equal(deleteProjectAction, config.filesContent.project.delete);
    });
  });

  after('file structure deletion', () => {
    deleteFileStructure();
  })
});