import { combineReducers } from 'redux';
import landingManager from './landingManager';
import errorHandler from './errorHandler';

export default combineReducers({
    landingManager,
    errorHandler
});