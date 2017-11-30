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
        <ul className="search-results">
          <Link to="/company/AAPL" className="search-result-li">
            <div className="search-result-company">
              <span className="search-result-symbol">AAPL</span>
              <span className="search-result-name">Apple Inc</span>
            </div>
            <span className="search-result-marketprice">$35.92</span>
          </Link>
          <Link to="/company/AAPL" className="search-result-li">
            <div className="search-result-company">
              <span className="search-result-symbol">AAPL</span>
              <span className="search-result-name">Apple Inc</span>
            </div>
            <span className="search-result-marketprice">$35.92</span>
          </Link>
          <Link to="/company/AAPL" className="search-result-li">
            <div className="search-result-company">
              <span className="search-result-symbol">AAPL</span>
              <span className="search-result-name">Apple Inc</span>
            </div>
            <span className="search-result-marketprice">$35.92</span>
          </Link>
        </ul>
      </div>
    );
  }
}
export default SearchBar;
