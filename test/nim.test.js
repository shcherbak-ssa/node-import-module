'use strict';

/**
 *   I know it looks awful
 */

const mocha = require('mocha');
const {expect} = require('chai');

const testStructure = require('./src/structure');
const {createFileStructure, deleteFileStructure} = require('./src/utils');

let importModule = {};

describe('Test node-import-module package', () => {
  before(() => {
    createFileStructure(testStructure);
    importModule = require('../nim');
  });
  after(() => { deleteFileStructure() });

  it('import the create-app.js file content, ' +
     'which should be a boolean with the value \'true\'', () => {
    const createApp = importModule('app', 'create');
    
    expect(createApp)
      .to.be.a('boolean')
      .and.equal(true);
  });
  it('import the app-config.json content, ' +
     'which should be an object with property \'name\' with the value \'node-import-module\'', () => {
    const appConfig = importModule('app', 'config');
    
    expect(appConfig)
      .to.be.an('object')
      .and.has.property('name');

    expect(appConfig.name)
      .to.be.a('string')
      .and.equal('node-import-module');
  });
  it('import the launcher content, which should be a string with value \'launcher\'', () => {
    const appLauncher = importModule('app', 'launcher');

    expect(appLauncher)
      .to.be.a('string')
      .and.equal('launcher');
  });
});