import React from 'react';
import ReactSVG from 'react-svg';
import SearchBarContainer from './searchbar_container';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 0) {
        $("#navbar-container").addClass("active");
      }
      else {
        $("#navbar-container").removeClass("active");
      }
    });

    return (
      <div className="navbar" id="navbar-container">
        <div className="navbar-left">
          <Link to='/home'>
            <ReactSVG
              path='/assets/feather.svg'
              className='logo-navbar feather-logo'
            />
          </Link>
          <SearchBarContainer className="white-input" id="search-bar"/>
        </div>
        <div className="navbar-right">
          <NavLink exact to="/" className="nav-link" activeClassName="nav-link-selected">Home</NavLink>
          <NavLink exact to="/account" className="nav-link" activeClassName="nav-link-selected">Account</NavLink>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
