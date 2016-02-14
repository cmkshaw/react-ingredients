// Entry point where things enter into DOM
// Name the NPM packages
// npm start to compile main.js
var React = require('react');
var ReactDOM = require('react-dom');

var List = require('./components/List.jsx');

//Grab the DOM, let's insert a list in #ingredients ID
ReactDOM.render(<List/>, document.getElementById('ingredients'));
