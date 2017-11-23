import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      symbol: '',
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className="search-container">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input type="text"
          value={this.state.name}
          placeholder="Search for stocks"
          onChange={this.update('name')}
          className="white-input"
          id="search"
        />
      </div>
    );
  }
}
export default SearchBar;
