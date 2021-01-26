# sitecoreUtils
A utility library for working with the Sitecore CMS.

**THIS REPOSITORY IS NO LONGER MAINTAINED**

## Install
sitecoreUtils is an ES6 module. Consequently, you'll need an ES6 transpiler ([Babel](https://babeljs.io) is a nice one) and a module loader ([SystemJS](https://github.com/systemjs/systemjs) will do the job) as part of your Javascript workflow.

If you're already using the [JSPM package manager](http://jspm.io) for your project, you can install sitecoreUtils with the following command:

```
$ jspm install github:DEGJS/sitecoreUtils
```

## Usage

### Importing individual sitecoreUtils methods:
```js
import { isSitecoreEditMode } from "DEGJS/sitecoreUtils";

let editModeCheck = isSitecoreEditMode();
```

### Importing all sitecoreUtils methods:
```js
import * as sitecoreUtils from "DEGJS/sitecoreUtils";

let editModeCheck = sitecoreUtils.isSitecoreEditMode();
```

## Methods

### isSitecoreEditMode(editModeClass, el)
Returns a boolean value depending on whether the site is currently in Sitecore's logged-in Experience Editor mode, based on a class set on a DOM element.

#### editModeClass
Type: `String`  
Default: `sc--edit-mode`  
The class name that's tested for on a given element

#### el
Type: `DOM element`  
Default: `document.body`  
The element that's checked for the given class


## Browser Support

sitecoreUtils depends on the following browser APIs:
+ classList: [Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) | [Polyfill](https://github.com/eligrey/classList.js/)

To support legacy browsers, you'll need to include polyfills for the above API.
