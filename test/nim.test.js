'use strict';

/**
 *   I know it looks awful
 */

const mocha = require('mocha');
const {expect} = require('chai');

const testStructure = require('./src/structure');
const {createFileStructure, deleteFileStructure} = require('./src/utils');

let importModule = {};

before('create a file structure and require node-import-module package', () => {
  createFileStructure(testStructure);
  importModule = require('../nim');
});
after('delete the file structre', () => {
  deleteFileStructure();
});

describe('Test node-import-module package', () => {
  it('import the create-app.js content', () => {
    const createApp = importModule('app', 'create');
    expect(createApp).to.be.a('boolean').and.equal(true);
  });
  it('import the app-config.json content', () => {
    const appConfig = importModule('app', 'config');
    
    expect(appConfig).to.be.an('object').and.has.property('name');
    expect(appConfig.name).to.be.a('string').and.equal('node-import-module');
  });
  it('import the launcher content', () => {
    const appLauncher = importModule('app', 'launcher');
    expect(appLauncher).to.be.a('string').and.equal('launcher');
  });
});

describe('Test the object and destructuring syntax', () => {
  it('import the create-app.js as importModule.app', () => {
    const createApp = importModule.app('create');
    expect(createApp).to.be.a('boolean').and.equal(true);
  });
  it('import the app-config.json as {app: importApp} = importModule', () => {
    const {app: importApp} = importModule;
    const appConfig = importApp('config');
    
    expect(appConfig).to.be.an('object').and.has.property('name');
    expect(appConfig.name).to.be.a('string').and.equal('node-import-module');
  });
  it('import the launcher as {importApp} = importModule', () => {
    const {importApp} = importModule;
    const appLauncher = importApp('launcher');

    expect(appLauncher).to.be.a('string').and.equal('launcher');
  });
});

describe('Test global modules', () => {
  it('import the string-global.js by import function', () => {
    const stringGlobal = importModule('string-global');
    expect(stringGlobal).to.be.a('string').and.equal('global');
  });
  it('import the boolean-global.js as importModule.$', () => {
    const booleanGlobal = importModule.$('boolean-global');
    expect(booleanGlobal).to.be.a('boolean').and.equal(true);
  });
  it('import the object-global.js as {$} = importModule', () => {
    const {$} = importModule;
    const objectGlobal = $('object-global');

    expect(objectGlobal).to.be.a('object').with.property('name');
    expect(objectGlobal.name).to.be.a('string').and.equal('global');
  })
})