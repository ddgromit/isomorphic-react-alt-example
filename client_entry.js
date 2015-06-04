// This code only runs in the browser. It's the webpack "entry point."
import Counter from './app/components/Counter';
import React from 'react';

// Render on top of the DOM node the server rendered to.
let mountNode = document.getElementById("react-main");
React.render(<Counter />, mountNode);
