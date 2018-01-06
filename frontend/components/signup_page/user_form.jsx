import React from 'react';
import LoginPage from '../login_page/login_page';
import ReactSVG from 'react-svg';
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
    this.removeRedBorder = this.removeRedBorder.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  renderErrors() {
    return(
      <ul className="errors-index">
        {this.props.errors.map((error, i) => (
          <li className="errors-list-item" key={`error-${i}`}>
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
    if (!this.state.cash_value) {
      this.state.cash_value = "5000";
    }
    const user = this.state;
    this.props.signup({user});
  }

  update(field) {
    this.confirmPassword();
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

  confirmPassword() {
    return () => {
      const pwConf = document.getElementById("pw-conf");
      if (this.state.password.length === 0) {
        pwConf.style.border = "1px solid $light-gray";
      } else if (this.state.password === this.state.password_confirmation) {
        pwConf.style.border = "1px solid red";
      } else {
        pwConf.style.border = "1px solid $green";
      }
    };
  }

  addRedBorder() {
    this.props.errors.forEach((err) => {
      if (err.includes("can't be blank")) {
        let strSplit = err.split(" can't be blank");
        let inputValue = strSplit[0].toLowerCase();
        inputValue = "#" + inputValue.replace(/\s/g,'');
        $(inputValue).addClass("red-border");
      }
    });
  }

  removeRedBorder(event) {
    $(event.target).removeClass("red-border");
  }

  render() {
    const cash_value = this.state.cash_value.replace(/[^0-9]/g,'');
    return (
      <div className="full-height">
        <form onSubmit={this.handleSubmit} className="signup-form-box">

          <div className="signup-left-sidebar">

            <div className="name-input-fields">
              <input type="text"
                value={this.state.first_name.trim()}
                placeholder="First Name"
                onChange={this.update('first_name')}
                onClick={(e) => this.removeRedBorder(e)}
                onKeyUp={(e) => this.removeRedBorder(e)}
                className="white-input"
                id="firstname"
              />
              <input type="text"
                value={this.state.last_name.trim()}
                placeholder="Last Name"
                onChange={this.update('last_name')}
                onClick={(e) => this.removeRedBorder(e)}
                onKeyUp={(e) => this.removeRedBorder(e)}
                className="white-input"
                id="lastname"
              />
            </div>
            <input type="text"
              value={this.state.email}
              placeholder="Email Address"
              onChange={this.update('email')}
              onClick={(e) => this.removeRedBorder(e)}
              onKeyUp={(e) => this.removeRedBorder(e)}
              className="white-input"
              id="email"
            />
            <input type="text"
              value={this.state.username}
              placeholder="Robinhood Username"
              onChange={this.update('username')}
              onClick={(e) => this.removeRedBorder(e)}
              onKeyUp={(e) => this.removeRedBorder(e)}
              className="white-input"
              id="username"
            />
            <input type="password"
              value={this.state.password}
              placeholder="Password (min. 8 characters)"
              onChange={this.update('password')}
              onClick={(e) => this.removeRedBorder(e)}
              onKeyUp={(e) => this.removeRedBorder(e)}
              className="white-input"
              id="password"
            />
            <input type="password"
              value={this.state.password_confirmation}
              placeholder="Confirm Password"
              onChange={this.update('password_confirmation')}
              onClick={(e) => this.removeRedBorder(e)}
              onKeyUp={(e) => this.removeRedBorder(e)}
              className="white-input"
              id="pw-conf"
            />
            <input type="text"
              value={cash_value}
              placeholder="How much would you like to start investing with?"
              onChange={this.update('cash_value')}
              onClick={(e) => this.removeRedBorder(e)}
              onKeyUp={(e) => this.removeRedBorder(e)}
              className="white-input"
              id="cash-value"
            />


            <span className="disclaimer">
              Disclaimer: Your "funds" are hypothetical, not using
              actual funds. How much you decide to start investing
              with cannot be changed. The only way to increase funds
              is to make actual trades that change with current
              market values.

              {"\n"}The ability to look up stock
              prices and historical data for the provided companies
              are valid and are sourced from an API.

            </span>

          </div>

          <div className="signup-right-sidebar">
            <input type="submit"
              value="Sign Up"
              className="signup-button"
              />

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
              {this.renderErrors()}
            </div>


        </form>
      </div>
    );
  }
}

export default UserForm;
