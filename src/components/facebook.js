import React from 'react';
import { FacebookProvider, Status, LoginButton as LoginFacebook } from 'react-facebook';
import { FacebookLoginButton } from 'react-social-login-buttons';
const { REACT_APP_FACEBOOK_APP_ID } = process.env;

export const Provider = (props) => (
  <FacebookProvider appId={REACT_APP_FACEBOOK_APP_ID} children={props.children} />
);

export const LoginStatus = () => {
  return (
    <Provider>
      <Status>
        {({ loading, status }) => (
          <div>
            {loading}
            {status}
          </div>
        )}
      </Status>
    </Provider>
  );
};

export const Login = ({ onCompleted, onError }) => {
  return (
    <Provider>
      <LoginFacebook scope='email' onCompleted={onCompleted} onError={onError}>
        <FacebookLoginButton children='Continue with Facebook' />
      </LoginFacebook>
    </Provider>
  );
};

export default {
  Provider,
  Login,
  LoginStatus,
};
