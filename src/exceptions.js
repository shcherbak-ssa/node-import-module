'use strict';

const exceptions = {
  throwIDFieldDidNotFind(configFilePath) {
    return `the id field did not find: {\n  path: ${configFilePath}\n}`;
  },
  throwIDDoesNotExist(configFileID) {
    return `config file with id ${configFileID} does not exist`;
  },
  throwExportsFieldDidNotFind(configFilePath) {
    return `did not find the exports field: {\n  path: ${configFilePath}\n}`;
  },
  throwModuleNameFieldDidNotFind(moduleName, configFilePath) {
    return `module name did not find: {\n  module: ${moduleName}\n  path: ${configFilePath}\n}`;
  },
  throwCannotResolveModulePath(moduleName, modulePath) {
    return `cannot resolve module path: {\n  module: ${moduleName}\n  path: ${modulePath}\n}`;
  },
  throwMoreThanOneConfigFileWithSameID(configFileID, paths) {
    return 'more than one config file found with the same id: {\n' +
            `  id: ${configFileID}\n` +
            `  paths: [\n    ${paths.join('\n    ')}\n  ]\n` +
            '}';
  }
};

const proxyExceptions = new Proxy(exceptions, {
  get(target, property) {
    return (...params) => {
      const message = target[property](...params);
      throw new Error(message);
    }
  }
})

module.exports = proxyExceptions;