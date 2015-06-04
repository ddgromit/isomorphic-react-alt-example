// This file only runs on the server.  It spits out an HTML template with
// the rendered react app in the #react-main element.
// After the page loads, the client app will render on top of it and
// make it functional.
// Important: Run this file via `start_webserver.js` so it loads ES6 first!
import express from 'express';
import path from 'path';
import React from 'react';
import Counter from '../app/components/Counter';

let webapp = express();
webapp.set('view engine', 'jade');
webapp.set('views', path.join(path.dirname(__filename), './templates'));

// Serve up bundle.js so we can load it in index.html.  In production,
// bundle.js would just be served on a static server.
webapp.use(express.static(path.join(__dirname, '../build')));

// Catch all URLs with express. React will do the actual decision making.
webapp.get('*', function (req, res) {
  // Turn our app into a string
  let mainComponent = React.createElement(Counter);
  let reactHtml = React.renderToString(mainComponent);

  // Spit it out into the index.jade template.
  res.render('index', { content: reactHtml });
})

var server = webapp.listen(3000, function() {
  console.log('✔ Serving up some react at http://localhost:3000');
});
