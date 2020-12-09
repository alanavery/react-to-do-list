import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
      <div onClick={this.props.deleteItem}>
        <li>{this.props.doThis}</li>
      </div>
    );
  }
}

export default ListItem;
