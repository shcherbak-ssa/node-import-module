'use strict';

const {
  checkExportsFileIDParameterType,
  checkModuleNameParameterType
} = require('../check-types');

const IMPORT_WORD_LENGTH = 'import'.length

const moduleImporterProxyHandler = {
  get(target, property) {
    let exprorsFileID = property;
    checkExportsFileIDParameterType(exprorsFileID);

    if( property.startsWith('import') )
      exprorsFileID = property.slice(IMPORT_WORD_LENGTH).toLowerCase();

    return (moduleName) => {
      checkModuleNameParameterType(moduleName);
      return target.importer.importModule(exprorsFileID, moduleName);
    }
  }
};

module.exports = moduleImporterProxyHandler;