'use strict';

const {
  checkExportsFileIDParameterType,
  checkModuleNameParameterType
} = require('../check-types');

const IMPORT_WORD_LENGTH = 'import'.length

const moduleImporterProxyHandler = {
  get(target, property) {
    const exprorsFileID = checkPropertyName(property);

    return (moduleName) => {
      checkModuleNameParameterType(moduleName);
      return target.importer.importModule(exprorsFileID, moduleName);
    }
  }
};

function checkPropertyName(property) {
  const exprorsFileID = property;
  checkExportsFileIDParameterType(exprorsFileID);

  if( property.startsWith('import') )
    return property.slice(IMPORT_WORD_LENGTH).toLowerCase();

  return exprorsFileID;
}

module.exports = moduleImporterProxyHandler;