import React, { Component } from 'react';

class DataItem extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.children}</h4>
        <p>{this.props.info}</p>
      </div>
    );
  }
}

export default DataItem;