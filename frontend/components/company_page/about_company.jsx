import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';
import { stringifyToInteger } from '../../util/parsing_functions';

class AboutCompany extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bioClass: "bio-hidden",
      showText: "Show more",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.bioClass === "bio-hidden") {
      this.setState({bioClass: "bio-shown", showText: "Show less"});
    } else {
      this.setState({bioClass: "bio-hidden", showText: "Show more"});
    }
  }

  render() {
    const { bioClass, showText } = this.state;
    const { loading, company } = this.props;
    if (loading) {
      return (<div></div>);
    } else {
      return (
        <div className="about-company">
            <div className="about-header">
              <h2>About {company.symbol}</h2>
              <span onClick={this.handleClick}>{ showText }</span>
            </div>
          <div className="tag-div">
            <button className="company-tag">10 Most Popular</button>
            <button className="company-tag">100 Most Popular</button>
            <button className="company-tag">E-Commerce</button>
            <button className="company-tag">Retail</button>
            <button className="company-tag">Manufacturing</button>
            <button className="company-tag">Internet</button>
          </div>
          <span className={ bioClass }>{company.biography}</span>
          <div className="company-facts-container">
            <div className="company-fact"><h4>CEO</h4><span>{company.ceo}</span></div>
            <div className="company-fact"><h4>Founded</h4><span>{company.founding_year}</span></div>
          <div className="company-fact"><h4>Employees</h4><span>{stringifyToInteger(company.employees)}</span></div>
            <div className="company-fact"><h4>Headquarters</h4><span>{company.location}</span></div>
          </div>
        </div>
      );
    }
  }
}

export default AboutCompany;
