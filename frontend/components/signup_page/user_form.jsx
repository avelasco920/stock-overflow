import React from 'react';
import LoginPage from '../login_page/login_page';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import { Link, withRouter } from 'react-router-dom';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      username: '',
      password: '',
      password_confirmation: '',
      cash_value: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signinDemo = this.signinDemo.bind(this);
    this.toggleHide = this.toggleHide.bind(this);
  }

  signinDemo(event) {
    event.preventDefault();
    this.state = {
      username: 'investor_user',
      password: 'hello123'
    };
    const user = this.state;
    this.props.login({user});
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

  toggleHide() {
    const faqAnswer = document.getElementById("faq-answer");
    if (faqAnswer.style.display === "none") {
        faqAnswer.style.display = "block";
    } else {
        faqAnswer.style.display = "none";
    }
  }

  render() {
    const isEnabled = this.state.email.length > 0 && this.state.password.length > 0;
    return (
      <div className="full-height">
        <form onSubmit={this.handleSubmit} className="signup-form-box">

          <div className="signup-left-sidebar">

            <div className="name-input-fields">
              <input type="text"
                value={this.state.first_name.trim()}
                placeholder="First Name"
                onChange={this.update('first_name')}
                className="white-input"
              />
              <input type="text"
                value={this.state.last_name.trim()}
                placeholder="Last Name"
                onChange={this.update('last_name')}
                className="white-input"
              />
            </div>
            <input type="text"
              value={this.state.email}
              placeholder="Email Address"
              onChange={this.update('email')}
              className="white-input"
              id="email"
            />
            <input type="text"
              value={this.state.username}
              placeholder="Robinhood Username"
              onChange={this.update('username')}
              className="white-input"
              id="username"
            />
            <input type="password"
              value={this.state.password}
              placeholder="Password (min. 8 characters)"
              onChange={this.update('password')}
              className="white-input"
              id="password"
            />
            <input type="password"
              value={this.state.password_confirmation}
              placeholder="Confirm Password"
              onChange={this.update('password_confirmation')}
              className="white-input"
              id="password"
            />
            <input type="text"
              value={this.state.cash_value}
              placeholder="How much would you like to start investing with?"
              onChange={this.update('cash_value')}
              className="white-input"
              id="cash-value"
            />


            <span className="disclaimer">
              Disclaimer: this website was produced yadiyadiya.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam tempor consequat massa id luctus. Proin in fermentum
              diam, ut volutpat risus. Mauris quis odio nec ex semper
              molestie. Proin aliquet lorem sapien, molestie aliquet
              massa accumsan a. Suspendisse a euismod lorem, gravida
              pharetra libero. Etiam feugiat quis lectus bibendum
              laoreet. Mauris feugiat elementum volutpat. Proin id
              justo varius, vehicula nibh ut, tincidunt erat. Aenean
              blandit lacus venenatis, lobortis orci ut, commodo dui.
              Aenean eu rutrum ex, non fringilla odio.
            </span>

          </div>

          <div className="signup-right-sidebar">
            <input type="submit"
              value="Sign Up"
              className="signup-button"
              disabled={!isEnabled}/>
            <div className="signup-faq">
                <div className="faq-spread" onClick={this.toggleHide}>
                  <span className="faq-text" onClick={this.toggleHide}>
                    Is there a way to access the site without signing up?
                  </span>
                  <i className="fa fa-chevron-down"
                    aria-hidden="true"
                    id="chevron-down"/>
                </div>
                  <a
                    href="https://www.w3schools.com"
                    id="faq-answer"
                    display="true"
                    onClick={this.signinDemo}>
                    Click here to demo the site!
                  </a>
              </div>

              <span className="login-link">Already have an account?
                <Link to="/login" className="header-link">
                  <strong> Sign in here.</strong>
                </Link>
                <AuthRoute path="/login" component={LoginPage} />
              </span>
            </div>


        </form>
      </div>
    );
  }
}

export default UserForm;
//
// <span id="collapse" display="true" className="faq-text">
// </span>
