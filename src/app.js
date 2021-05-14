'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var template = (
  <div>
    <h1>This is JSX</h1>
    <p>This is some info</p>
  </div>
);

var templateTwo = (
  <div>
    <h1>Arrianne</h1>
    <p>Age : 33</p>
    <p>Sunshine Coast</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
