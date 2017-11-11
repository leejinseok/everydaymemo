import { createAction, handleActions, handleAction } from 'redux-actions';

import { Map, fromJS } from 'immutable';
import * as AuthAPI from 'lib/api/auth';
import { pender } from 'redux-pender';

const CHECK_LOGIN_STATUS = 'user/CHECK_LOGIN_STATUS';

export const checkLoginStatus = createAction(CHECK_LOGIN_STATUS, AuthAPI.checkLoginStatus);

const initialState = Map({
    user: null
});

export default handleActions({
    ...pender({
        type: CHECK_LOGIN_STATUS,
        onSuccess: (state, action) => {
            const user = action.payload.data.user;
            return state.set('user', Map(user));
        }
    })
}, initialState)