import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';
import SearchIndexItem from './search_index_item';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
    this.clearResults = this.clearResults.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    }, () => {
      if ( !this.state.query) {
        this.props.clearSearchResults();
      } else {
        this.props.searchCompanyDatabase(this.state.query);
      }
    });
  }

  clearResults() {
    setTimeout( () => {
      this.props.clearSearchResults();
      this.setState({query: ''});
    }, 300);
  }


  render() {
    return (
      <div className="search-container">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input type="text"
          value={this.state.query}
          placeholder="Search for stocks"
          onChange={this.update('query')}
          onBlur={this.clearResults}
          className="white-input"
          id="search"
        />
        <ul className="search-results">
          { this.props.searchResults.map(company =>
            <SearchIndexItem
              key={company.symbol}
              company={company}
            />
          )}
        </ul>
      </div>
    );
  }
}
export default SearchBar;
