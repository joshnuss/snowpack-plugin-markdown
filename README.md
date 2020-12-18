snowpack-plugin-markdown
-----------------------

This plugin adds support for importing markdown `.md` files. It supports hot-module-reloading (HMR) and front matter.

## Usage

```
npm i snowpack-plugin-markdown --save-dev
```

Then in your Snowpack config

```js
// snowpack.config.js

module.exports = {
  plugins: [
    [
      'snowpack-plugin-markdown',
      {
        /*
           Pass options to `marked`. See a full list of options here:
           https://marked.js.org/using_advanced#options
        */
      },
    ],
  ],
}
```

## Front matter

Attributes can be added to the top the file in YAML format:

```markdown
---
title: Hello World!
date: 2020-01-01
---

# Some markdown
```

The attributes will be available when imported:

```js
import file from './path/to/some/file.md'

// file.markdown -> original markdown
// file.body -> markdown converted to html
// file.title -> from frontmatter (can be any name you'd like)
// file.date -> from frontmatter (cane be name you'd like)
```

# License

MIT
