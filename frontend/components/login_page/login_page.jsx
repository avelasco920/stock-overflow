import React from 'react';
import SessionFormContainer from './session_form_container';
import { Link, withRouter } from 'react-router-dom';
import { clearCompanies } from '../../actions/companies_actions';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login">
        <div className="cover-image"></div>
        <div className="form-container">
          <SessionFormContainer />
        </div>
      </div>
    );
  }
}

export default withRouter(LoginPage);
