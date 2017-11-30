import React from 'react';
import SignupPage from '../signup_page/signup_page';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signinDemo = this.signinDemo.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  renderErrors() {
    return(
      <ul className="errors-index-login">
        {this.props.errors.map((error, i) => (
          <li className="errors-list-item"
            key={`error-${i}`}
            id="login-error">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  signinDemo(event) {
    event.preventDefault();
    this.state = {
      username: 'the_transponster',
      password: 'hello123'
    };
    const user = this.state;
    this.props.login({user});
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    this.props.login({user});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className="session-form">
        <form onSubmit={this.handleSubmit} className="login-form-box">

          <h2>Welcome to StockOverflow</h2>

          <label htmlFor="login-input">Username</label>
          <input type="text"
            value={this.state.username.trim()}
            onChange={this.update('username')}
            className="gray-input"
          />
          <label htmlFor="password-input">Password</label>
          <input type="password"
            value={this.state.password}
            onChange={this.update('password')}
            className="gray-input"
          />

          <span id="login-to-signup">Not a member?
            <Link to="/signup" className="header-link">
              <strong> Let's get you signed up.</strong>
            </Link>
          </span>
          {this.renderErrors()}

          <AuthRoute path="/signup" component={SignupPage} />
          <div className="session-buttons">
            <input type="submit" value="Sign In" className="signin-button"/>
            <input
              type="button"
              value="Demo"
              onClick={this.signinDemo}
              className="demo-button"/>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
