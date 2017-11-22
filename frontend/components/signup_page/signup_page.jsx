import React from 'react';
import UserFormContainer from './user_form_container';
import { Link, withRouter } from 'react-router-dom';

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="signup">
        <div className="signup-header">
          <div className="signup-header-text">
            <image
              src="https://d2ue93q3u507c2.cloudfront.net/assets/robinhood/images/logo.png"
              className="green-logo-large"/>
            <h1>Let's get Started</h1>
          </div>
        </div>
        <div className="user-form-container">
          <UserFormContainer />
        </div>
      </div>
    );
  }
}

export default withRouter(SignupPage);
