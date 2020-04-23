import React, { Component } from 'react';
import DataItem from './DataItem';

class DataList extends Component {
  render() {
    const exampleNodes = this.props.data.map (example => {
      return (
        <DataItem author={example.author} key={example.id} >
          {example.title} {example.info}
        </DataItem>
      );
    });

    return (
      <div>
        {exampleNodes}
      </div>
    );
  }
}

export default DataList;