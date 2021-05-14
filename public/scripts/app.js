'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'This is JSX'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  )
);

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Arrianne'
  ),
  React.createElement(
    'p',
    null,
    'Age : 33'
  ),
  React.createElement(
    'p',
    null,
    'Sunshine Coast'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
