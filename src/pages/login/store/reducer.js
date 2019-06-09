import { fromJS } from 'immutable';
import * as constants from './constants';
const dafaultState = fromJS({
    login:false
});

export default (state = dafaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_LOGIN:
            return state.set('login', action.value);
        case constants.LOGOUT:
            return state.set('login', action.value);
        default:
            return state;
    }


}