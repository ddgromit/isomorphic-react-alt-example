# Isomorphic React + Alt

Here's an example of an isomorphic single page app that's compiled with webpack, build in react, and has its state managed by alt.  The server runs on node.js.

* Isomorphic: Means it can render on both the server and the browser.  So the whole page is there on load for SEO, but you can also jump around pages client-side without a page refresh.
* Webpack: The build system that compiles down a bunch a JS files into a single file.  Similar to grunt, gulp, etc.
* React: The "view" layer that most app code is written in.  Similar to backbone views, angular, etc.
* Alt: A library to manage global state in the app.  It holds data and differnet components can subscribe to changes.  It's an implementation of facebook's "flux" spec.  Similar to backbone collections.

## Kicking things off in development

1. `npm install`
1. `npm run server` to start the webserver
1. `npm run watch` to compile the JS
1. Go to http://localhost:3000


## Structure

```
├── app                 (shared app code)
│   └── components
│       └── Counter.js
├── build               (compiled client-side files)
│   └── bundle.js
├── client_entry.js     (client-specific code)
├── config              (webpack settings)
│   ├── webpack.config.hot.js
│   ├── webpack.config.js
│   └── webpack.config.production.js
├── start_webserver.js  (kicks off the server)
└── webserver           (server-specific code)
    ├── templates
    │   └── index.jade
    └── webserver.js
```
