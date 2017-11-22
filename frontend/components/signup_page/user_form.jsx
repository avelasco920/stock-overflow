import React from 'react';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: 'First Name',
      last_name: 'Last Name',
      email: 'Email Address',
      username: 'StockOverflow Username',
      password: 'Password (min. 10 characters)',
      password_confirmation: 'Confirm Password',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    this.props.signup({user});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="signup-form-box">

          <div className="signup-left-sidebar">

            <div className="name-input-fields">
              <input type="text"
                value={this.state.first_name.trim()}
                onChange={this.update('first_name')}
                className="white-input"
              />
              <input type="text"
                value={this.state.last_name}
                onChange={this.update('last-name')}
                className="white-input"
              />
            </div>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="white-input"
            />
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="white-input"
              id="username"
            />
            <input type="text"
              value={this.state.password}
              onChange={this.update('password')}
              className="white-input"
            />
            <input type="text"
              value={this.state.password_confirmation}
              onChange={this.update('password_confirmation')}
              className="white-input"
            />


          </div>

          <div className="signup-right-sidebar">
            <input type="submit" value="Sign Up" className="signup-button"/>
            <div className="signup-faq">
                <div className="faq-spread">
                  <span>
                    Is there a way to access the site without signing up?
                  </span>
                  <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
                <span>
                  Click here to demo the site!
                </span>
              </div>
            </div>


        </form>
      </div>
    );
  }
}

export default UserForm;
