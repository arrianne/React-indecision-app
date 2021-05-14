'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var app = {
  title: 'Indecision appppppp',
  subtitle: 'This is a subtitle'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  )
);
var user = {
  name: 'Bob',
  age: '46',
  location: 'sunshine coast'
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    user.location
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
