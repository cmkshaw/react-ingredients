var React = require('react');
var List = require('./List.jsx');

//This class will be able to handle user input
var ListManager = React.createClass({
  //Define property
  getInitialState: function() {
    // Every component will call this property (function)
    // We have an empty array of items, then a space for new text
    return { items: [], newItemText: ''};
  },
  handleSubmit: function() {
    // Handle data submission
    // Let's not use the onclick
    e.preventDefault();

    // Components have properties and STATE
    // This.props = readonly
    // This.state = Changeable data

    // Grab Items
    var currentItems = this.state.items;

    // New Item text, push to end of Array
    currentItems.push(this.state.newItemText);

    // Explicitly set state & update items
    // setState is a function - call it when you wanna change the state of your app
    this.setState(items: currentItems, newItemText: '');
  },
  // When user is typing, it'll go into newItemText
  render: function() {
    return(
      <div>
        <h3>{this.props.title}</h3>
        <form onSubmit="{this.handleSubmit}">
            <input onChange={this.onChange} value={this.state.newItemText} />
            <button>Add</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
});
