import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DataList from './DataList';

class DataComponent extends Component {
  render() {
    return (
      <div>
        <h4>Data (DataComponent)</h4>
        <Link>
          <button>Add data</button>
        </Link>

        <DataList 
          exampledata={this.props.exampledata}
        />
      </div>
    );
  }
}

export default DataComponent;