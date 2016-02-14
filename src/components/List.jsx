var React = require('react');
// Import list item
var ListItem = require('./ListItem.jsx');

var List = React.createClass({
  render:function() {
    // Create a list of ingredients
    // Rule of thumb: Get into the habit of showing a list a unique identifier
    var createItem = function(text, index){
      return <ListItem key={index + text} text={text} />;
    };
    // Calling map function, passing in to create the list item
    // For every item in the items array
    return (<ul>{this.props.items.map(createItem)}</ul>);
  }
});

module.exports = List;
