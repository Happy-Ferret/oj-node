# `oj-node`

This is a very, very, very basic bit of code that works similar to CoffeeScript's "register". It makes `.oj` code able to be required just like other code. The state is saved locally int he module, so it can not be tampered with, nor can it be accidentially deleted. It simply exists in it's own little scope.

The global `$oj_oj` variable is required for the runtime. Feel free to tamper with OJ itself by requireing the runtime! If you want to do so, install it as a peer dependency.

## Very basic, very easy.
```javascript
require("oj-node");
require("./Application.oj");
// Or without extension:
require("./Application");
```

## Rules of thumb when using `oj-node`:
- Define classes **globally**. Making defined inside a class is a) pointless and b) would break compilation.
- The `@class` keyword has no effect, except when the class was not already require'd. Then again, you could just require it and are good to go.
- You can not `module.export` classes directly; you also don't need to either. Once defined, they are avilable everywhere. Re-requireing the respective files does not crash the compilation. All it will do is give back the exported data from `module.exports`, but the file, like usual, is not re-run.
- There is only one compile state. If one class tries to override another, an Exception is thrown and you risk crashing the process.
- OJ files have advanced syntax, but are compiled down to JS before execution. That means they behave exactly the same.

## Why?
Many people use libraries to add class support to their applications. There also are people using CoffeeScript in exactly this manner - so I decided to try if it works with OJ. And looky, it does :). I like objective-c and already am using OJ in my front-end coding (to a point I even wrote a language pack for Atom...) and so I wanted to see if this works with NodeJS. Well - let's see how far I can push this.

Yes, this project is partially a PoC. It works, but I KNOW that OJ wasn't originally meant for this use :) However...trying does not hurt!

## install
Do your typical NPM-dance and you're good to go.

    npm install --save oj-node

## `#`-macro support?
I do have a project that supports it - but it works asynchronously to an extend where `deasync` would be more painful than helpful. If you want that, consider pre-compiling your code.

## Module support?
Yep. Theoretically, you should be able to specify a `.oj` file in a `package.json`'s main entry and it should work. But unless your users include this module, it makes no sense. Consider using a NPM script to compile your module upon installation.
