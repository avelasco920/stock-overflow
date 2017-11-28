import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import PortfolioContainer from './portfolio_container';
import AccountFormContainer from './account_form_container';

const AccountPage = () => (
  <div className="account-page">
    <PortfolioContainer />
    <AccountFormContainer />
  </div>
);

export default AccountPage;
