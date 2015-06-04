// Load babel so we can use ES6 and JSX.
require("babel/register");

// The main server-side app code is in a separate file so we can use ES6. This
// file is just meant to require babel and can't use ES6 itself.
require("./webserver/webserver.js");
