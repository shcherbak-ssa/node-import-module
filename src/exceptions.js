'use strict';

const exceptions = {
  throwIDFieldDidNotFind(exportsFilePath) {
    return `the id field did not find: {\n  path: ${exportsFilePath}\n}`;
  },
  throwIDFieldIsEmpty(exportsFilePath) {
    return `the id field cannot be empty: {\n  path: ${exportsFilePath}\n}`;
  },
  throwIDDoesNotExist(exportsFileID) {
    return `exports file with id ${exportsFileID} does not exist`;
  },
  throwExportsFieldDidNotFind(exportsFilePath) {
    return `did not find the exports field: {\n  path: ${exportsFilePath}\n}`;
  },
  throwModuleNameFieldDidNotFind(moduleName, exportsFilePath) {
    return `module name did not find: {\n  module: ${moduleName}\n  path: ${exportsFilePath}\n}`;
  },
  throwCannotResolveModulePath(moduleName, modulePath) {
    return `cannot resolve module path: {\n  module: ${moduleName}\n  path: ${modulePath}\n}`;
  },
  throwMoreThanOneExportsFileWithSameID(exportsFileID, paths) {
    return 'more than one exports file found with the same id: {\n' +
            `  id: ${exportsFileID}\n` +
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