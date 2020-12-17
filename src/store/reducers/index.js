import { combineReducers } from 'redux';
import users from './_example';
import dashboard from './dashboard';
import localization from './localization';

export default combineReducers({ users, dashboard, localization });
