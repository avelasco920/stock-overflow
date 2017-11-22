import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="signup">
        <h1>Sign Up</h1>
      </div>
    );
  }
}

export default withRouter(SignupPage);
