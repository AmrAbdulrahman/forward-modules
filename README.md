# Forward Modules

This library automatically creates an exports map of all/some files
in a directory

![Image1](https://raw.githubusercontent.com/AmrAbdulrahman/forward-modules/master/img/example1.png)


![Image2](https://raw.githubusercontent.com/AmrAbdulrahman/forward-modules/master/img/example2.png)

## Install
`npm i --save forward-modules`

## Use
Inside any directory, just add your entry point file, you don't have to name it `index.js`, you can also name it `*.js` or `all.js`.

And just add the following snippet:

`module.exports = require('forward-modules')();`

You can also exclude some modules:

`module.exports = require('forward-modules')([
  'ModuleA',
  'ModuleB',
]);`

this exposes all modules in the directory except `ModuleA`, and `ModuleB`
