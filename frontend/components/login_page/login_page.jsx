import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <h1> this is the login page </h1>
    );
  }
}

export default withRouter(LoginPage);
