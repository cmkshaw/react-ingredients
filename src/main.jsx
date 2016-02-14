// Entry point where things enter into DOM
// Name the NPM packages
// npm start to compile main.js
var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

//Passing down an immutable property
ReactDOM.render(<ListManager title="Ingredients" />, document.getElementById("ingredients"));
