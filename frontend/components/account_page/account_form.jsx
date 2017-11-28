import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const AccountForm = ({user, logout}) => (
    <div className="account-form">
      <div className="photo-surround">
          <img src={user.img_url} className="profile-img"/>
      </div>
      <h4>{user.first_name} {user.last_name}</h4>
      <span>{user.username}</span>
    <div className="contact-info-surround">
        <div className="contact-info" >
          <span className="gray">Email</span>
          <span>{user.email}</span>
        </div>
        <div className="contact-info" id="contact-number">
          <span className="gray">Contact Number</span>
          <span>{user.contact_number}</span>
        </div>
      </div>
      <a onClick={() => logout()}>Sign Out</a>
    </div>
);

export default AccountForm;
