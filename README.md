# node-import-module #

This is an npm package that saves you from long paths to modules.

<details>
<summary><strong>Table of contents</strong></summary>

 - [Installation](#installation)
 - [Usage](#usage)
 - [How does this work?](#how-does-this-work)
 - [API](#api)
   * [Import funtions](#import-function)
   * [Object syntax](#object-syntax)
   * [Restructuring syntax](#restructuring-syntax)
   * [Exports file](#exports-file)
 - [Features](#features)
 - [Footer](#footer)
   * [Issues](#issues)
   * [Author](#author)
   * [License](#license) 

</details>

## Installation ##

```
$ npm install node-import-module
```

## Usage ##

*File structure*

```
- components
  - app
    - actions
      - rest
        - create-app.js
    - config
      - app-config.json
    - launcher
      - launcher.js
      - index.js
    - app.exports.js
- main.js
```

*app.exports.js*

```javascript
'use struct'

module.exports = {
  id: 'app',
  exports: {
    launcher: './launcher',
    config: './config/app-config.json',
    create: './actions/rest/create-app.js'
  }
};
```

*main.js*

```javascript
'use strict'

const importModule = require('node-import-module');

const appLauncher = importModule('app', 'launcher');
// appLauncher === require('./components/app/launcher')

const appConfig = importModule('app', 'config');
// appConfig === require('./components/app/config/app-config.json')

const createApp = importModule('app', 'create');
// createApp === require('./components/app/actions/rest/create-app')

/**
 * OR with object syntax
*/

const importModule = require('node-import-module');

const appLauncher = importModule.app('launcher');
const appConfig = importModule.app('config');
const createApp = importModule.app('create');

/**
 * OR with destructuring syntax
*/

const {app: importApp} = require('node-import-module');
// same as
const {importApp} = require('node-import-module'); // see description below

const appLauncher = importApp('launcher');
const appConfig = importApp('config');
const createApp = importApp('create');
```

## How does this work? ##

After the first import the package finds all *exports* files relative to the calling module.
It gets the *id* fields of the found files and saves their paths as `id => path` if everthing is okay.

It throws an exception if it did not find the *id* field or found a few files with the same *id* field

This action will happen once.
It is desirable that the first import be in the main file.
If you do not need to use the package in the main file,
simply put the following code at the beginning.

```javascript
/** your code before */

require('node-import-module');

/** your code after */
```

## API ##

### Import function ###

**importModule( exportsFileID : String, moduleName : String ) : Module**

Returns a found module or throw exception if an error happens.

*Parameters:*

 - **exportsFileID : String**<br>
   The *id* field in one of the *exports* files.

 - **moduleName : String**<br>
   One of the keys of the exports object in the *exports* file.

### Object syntax ###

**importModule.app( moduleName : String ) : Module**

You can use the [import function](#import-function) as an object,
where properties should be equal the *id* fields of the *exports* files.

*Parameters:* see description above.

### Destructuring syntax ###

When using the [object syntax](#object-syntax) you can use destructuring (ES6):

```javascript
const {app} = require('node-import-module');
const someModule = app('someModule');

// The code above is the same as using the object syntax:
const importModule = require('node-import-module');
const someModule = importModule.app('someModule');
```

But it does not look very good. You can solve it by renaming the property name:

```javascript
const {app: importApp} = require('node-import-module');
const someModule = importApp('someModule');
```

And this is not the best way. To make the code cleaner *node-import-module* supports *smart destructuring*:
a property name can be replaced with the template `import[exportsFileID]`, which should be in camelCase.

```javascript
const {importApp} = require('node-import-module');
// === {app: importApp}
```

### *Exports* file ###

A file that contains the paths of files to be exported.
The *exports* file name can be any, but must satisfy the pattern `*.exports.js`.

*Content:*

 - **id : String**<br>
   The unique identificator of the *exports* file.

 - **exports : Object**<br>
   List of export modules `name => path`.

   * **name : String** - The unique name of the module.
   * **path** - The path to the module relative to the current *exports* file.

## Features ##

 - [x] Write a working version
 - [x] Object syntax
 - [x] Destructuring syntax
 - [ ] Global modules
 - [ ] Custom name of import function
 - [ ] Anything else


## Footer ##

### Issues ###

 - [Bugs](https://github.com/shcherbak-ssa/node-import-module/issues)
 - [Advices](https://github.com/shcherbak-ssa/node-import-module/issues)
 - [My bad English](https://github.com/shcherbak-ssa/node-import-module/issues/1)

### Author ###

*Shcherbakov Stanislav* - [github/shcherbak-ssa](https://github.com/shcherbak-ssa)

### License ###

Copyright &copy; 2020 [Stanislav Shcherbakov](https://github.com/shcherbak-ssa).
Released under the [MIT License](LICENSE).