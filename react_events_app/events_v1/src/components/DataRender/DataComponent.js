import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DataList from './DataList';
import DataItem from './DataItem';

class DataComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title: "example01",
          info: "info01",
          author: "author01"
        },
        {
          id: 2,
          title: "example02",
          info: "info02",
          author: "author02"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h4>Data (DataComponent)</h4>
        <Link>
          <button>Add data</button>
        </Link>
        <DataList data={this.props.data} />
      </div>
    );
  }
}

export default DataComponent;