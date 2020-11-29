
import React from 'react';
import { FacebookProvider, Status, LoginButton } from 'react-facebook';
const { REACT_APP_FACEBOOK_APP_ID } = process.env;

export const Provider = ({ children }) => <FacebookProvider appId={REACT_APP_FACEBOOK_APP_ID} children={children} />

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
                onCompleted={(data) => console.log(data)}
                onError={(err) => console.error(err)}
            >
                {({ loading, handleClick, error, data }) => (
                    <span onClick={handleClick}>
                        Login via Facebook
                        {loading && (
                            <span>Loading...</span>
                        )}
                    </span>
                )}
            </LoginButton>
        </Provider>
    )
}

export default {
    Provider,
    Login,
    LoginStatus
}