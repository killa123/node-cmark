# node-cmark

fork from https://github.com/thomasjo/node-cmark
replace node-gyp implements to cmake-js

## dependencies
* [cmake-js](https://github.com/cmake-js/cmake-js)

```
npm install -g cmake-js
```

## install
```
npm install --save node-cmark
```

## usage
``` js

const cmark = require('node-cmark');
const markdown = '# h1 title';
console.log(cmark.markdown2html(cmark));//print <h1>h1 title</h1>

```
