import { Component } from 'react';

export class Filter extends Component {
  render() {
    const { handleFilter } = this.props;
    return (
      <>
        <p>Search by name</p>
        <input onChange={(evt) => {
          handleFilter(evt);
        }} type='text' />
      </>
    );
  }

}
