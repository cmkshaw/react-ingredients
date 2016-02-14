var React = require('react');

var ListItem = React.createClass({
  //Takes .jsx & shows it
  // Grab the property "text" from this object
  render: function() {
    return (
      <li>
        <h4>{this.props.text}</h4>
      </li>
    );
  }
})

module.exports = ListItem;
