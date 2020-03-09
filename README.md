# node-import-module #

This is an npm package which should help to import modules easier.

<details>
<summary><strong>Table of contents</strong></summary>

 - [Installation](#installation)
 - [Usage](#usage)
 - [How does this work?](#how-does-this-work)
 - [API](#api)
   * [Import funtions](#import-function)
   * [Exports-config file](#exports-config-file)
 - [Footer](#footer)
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
  - project
    - actions
      - create-project.js
    - config
      - project-config.json
    - launcher
      - launcher.js
      - index.js
    - exports.nim.js
- main.js
```

*exports.nim.js*

```javascript
'use struct'

module.exports = {
  id: 'project',
  exports: {
    launcher: './launcher',
    config: './config/project-config.json',
    create: './actions/create-project.js'
  }
};
```

*main.js*

```javascript
'use strict'

const importModule = require('nim');

const initProject = importModule('project', 'launcher');
// initProject === require('./components/project/launcher')

const projectConfig = importModule('project', 'config');
// projectConfig === require('./components/project/config/project-config.json')

const createProject = importModule('project', 'create');
// createProject === require('./components/project/actions/create-project')
```

## How does this work? ##

After the first import package finds all exports-config files relative to the calling module.
It gets the *id* field of the found files and

 * saves their paths as `id => path` if everthing is okay
 * does not save the found file if it did not find the *id* field
 * saves paths as an array if it found a few files with the same *id* field

This action will happen once.
It is desirable that the first import be in the main file.
If you do not need to use the package in the main file,
simply put the following code at the beginning.

```javascript
/** your code before */

require('nim');

/** your code after */
```

## API ##

### Import function ###

-----------------------

**importModule( configFileID : String, moduleName : String ) : Module**

Returns a found module or throw exception if an error happens.

*Parameters:*

 - **configFileID : String**<br>
   The *id* field in one of the exports-config files.

 - **moduleName : String**<br>
   One of the keys of the exports object in the exports-config file.

### Exports-config file ###

---------------------------

A file that contains the paths of files to be exported.
The exports-config file name can be any, but must satisfy the pattern `*.nim.js`.

*Content:*

 - **id : String**<br>
   The unique identificator of the exports-config file.

 - **exports : Object**<br>
   List of export modules `name => path`.

   * **name : String** - The unique name of the module.
   * **path** - The path to the module relative to the current exports-config file.

## Footer ##

### Author ###

--------------

*Shcherbakov Stanislav* - [github/shcherbak-ssa](https://github.com/shcherbak-ssa)

### License ###

---------------

Copyright &copy; 2020 [Stanislav Shcherbakov](https://github.com/shcherbak-ssa).
Released under the [MIT License](LICENSE).