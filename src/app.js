'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var app = {
  title: 'Indecision app',
  subtitle: 'This is a subtitle',
  options: ['one', 'two']
};

var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options:' : 'There are no options' }</p>
    <ol>
      <li>Option one</li>
      <li>Option two</li>

    </ol>
  </div>
);

var user = {
  name: 'Bob',
  age: '52',
  location: 'Hawaii'
};

function getLocation(location) {
  if (location){
    return <p>Location: {location}</p>;
  }
}
var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
