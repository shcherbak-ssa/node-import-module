'use strict';

let exceptions = {
  throwIDDoesNotExist(configFileID) {
    return `config file with id ${configFileID} does not exist`;
  },
  throwExportsFieldDidNotFind(configFilePath) {
    return `did not find the exports field {\n  path: ${configFilePath}\n}`;
  },
  throwModuleNameFieldDidNotFind(moduleName, configFilePath) {
    return `module name did not find {\n  module: ${moduleName}\n  path: ${configFilePath}\n}`;
  },
  throwCannotResolveModulePath(moduleName, configFilePath) {
    return `cannot resolve module path {\n  module: ${moduleName}\n  path: ${configFilePath}\n}`;
  },
  throwPathValueIsArray(configFileID, paths) {
    return `more than one config file found with the same id {\n  id: ${configFileID}\n  paths: ${paths}\n}`;
  }
};

exceptions = new Proxy(exceptions, {
  get(target, property) {
    return (...params) => {
      const message = target[property](...params);
      return new Error(message);
    }
  }
})

module.exports = exceptions;