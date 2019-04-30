import React, { Component } from 'react';

class QueryResult extends Component {
  constructor(props) {
    super(props);
    // This carries over the search results from SearchQuery.js
    this.data = props.data;
  }

  render() {
      // data is a "map" of the search results
      // This of course means you can use any map function on data
      let data = this.data;
      // console.log(data);
      const street = data.get('0').street;
      const city = data.get('0').city;
      const zip = data.get('0').zip;
      const state = data.get('0').state;
      const beds = data.get('0').beds;
      const baths = data.get('0').baths;
      const size = data.get('0').sq_ft;
      const type = data.get('0').type;
      const price = data.get('0').price;

      return (
          <div className='queryResult'>
              <div className='boxWrapper'>
                  <div className='boxLeft'>
                  <p>{street}</p>
                  <p>{city}</p>
                  <p>{zip}</p>
                  <p>{state}</p>
                  <p>{beds}</p>
                  <p>{baths}</p>
                  <p>{size}</p>
                  <p>{type}</p>
                  </div>
                  <div className='boxRight'>
                  <p>{price}</p>
                  </div>
              </div>
          </div>
      );
  }
}

export default QueryResult;
