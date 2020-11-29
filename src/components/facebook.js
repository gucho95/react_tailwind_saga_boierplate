
import React from 'react';
import { FacebookProvider, Status, LoginButton } from 'react-facebook';
const { REACT_APP_FACEBOOK_APP_ID } = process.env;

export const Provider = (props) => <FacebookProvider appId={REACT_APP_FACEBOOK_APP_ID} children={props.children} />

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
    )
}

export const Login = ({ onCompleted, onError }) => {
    return (
        <Provider>
            <LoginButton
                scope="email"
                onCompleted={(data) => console.log(data)}
                onError={(err) => console.error(err)}
            >
                <span>Login via Facebook</span>
            </LoginButton>
        </Provider>
    )
}

export default {
    Provider,
    Login,
    LoginStatus
}