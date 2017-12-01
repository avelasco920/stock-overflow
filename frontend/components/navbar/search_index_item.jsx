import React from 'react';
import { Link } from 'react-router-dom';
import { stringifyToFloat } from '../../util/parsing_functions';

class SearchIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: this.props.company
    };
  }

  render() {
    const { company } = this.state;
    if ( !company ) {
      return (<div></div>);
    } else {
      const companyUrl = `/company/${company.symbol}`;
      return (
        <Link to={companyUrl} className="search-result-li">
          <div className="search-result-company">
            <span className="search-result-symbol">{company.symbol}</span>
            <span className="search-result-name">{company.name}</span>
          </div>
          <span className="search-result-marketprice">
            ${stringifyToFloat(company.market_price)}
          </span>
        </Link>
      );
    }
  }
}

export default SearchIndexItem;
