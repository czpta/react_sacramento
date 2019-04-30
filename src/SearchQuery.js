import React, { Component } from 'react';
import QueryResult from './QueryResult';

class SearchQuery extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: '',
        didSend: false,
        data: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // This, when put in the input field, will auto-submit with the newly
  // typed value
  handleChange(event) {
    this.setState({value: event.target.value});
    // const newData = new FormData(event.target);
    // handleSubmit();
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    // this.setState({value: data.get('name')});

    fetch('http://example_search_query.php', {
        method: 'POST',
        body: data,
    }).then(resp => resp.json())
    .then(result =>{
        // Create map and push JSON object to map
        let strMap = new Map();
        Object.keys(result).forEach(k => {strMap.set(k, result[k])});
        // console.log(strMap);

        // Set the states when done
        this.setState({data: strMap, didSend: true});
    });
  }

// <input type="text" value={this.state.value} onChange={this.handleChange} />
    render() {
        // let data = this.data;
        return (
            <div>
                <div className="searchForm">
                    <form onSubmit={this.handleSubmit}>
                    <label>
                    Name:
                    <input name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                    </form>
                </div>
                {this.state.didSend && <QueryResult data={this.state.data} />}
            </div>
        );
    }
}  // End of class SearchQuery

export default SearchQuery;
