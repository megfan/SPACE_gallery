import { combineReducers } from 'redux';
import getNASAimg from './getNASAimg.js'

export default combineReducers({
    nasa: getNASAimg
});