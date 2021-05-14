'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var app = {
  title: 'Indecision appppppp',
  subtitle: 'This is a subtitle'
};


var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
  </div>
);
var user = {
  name: 'Bob',
  age: '46',
  location: 'sunshine coast'
};

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>{user.location}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
