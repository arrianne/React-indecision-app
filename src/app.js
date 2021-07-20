// 'use strict';
//
// console.log('App.js is running!');
//
// // JSX - JavaScript XML
// const app = {
//   title: 'Indecision app',
//   subtitle: 'This is a subtitle',
//   options: ['one', 'two']
// };
//
// const template = (
//   <div>
//     <h1>{app.title}</h1>
//     {app.subtitle && <p>{app.subtitle}</p>}
//     <p>{app.options.length > 0 ? 'Here are your options:' : 'There are no options' }</p>
//     <ol>
//       <li>Option one</li>
//       <li>Option two</li>
//
//     </ol>
//   </div>
// );
//
// const user = {
//   name: 'Bob',
//   age: '52',
//   location: 'Hawaii'
// };
//
// function getLocation(location) {
//   if (location){
//     return <p>Location: {location}</p>;
//   }
// }
// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );
//
// const appRoot = document.getElementById('app');
//
// ReactDOM.render(template, appRoot);

// const fullName = (x) => {
//   return x.split(' ')[0];
// };

const fullName = (x) => x.split(' ')[0];

console.log(fullName("bob jenkins"));
