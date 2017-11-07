import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as AuthAPI from 'lib/api/auth';

const CHANGE_INPUT = 'auth/CHANGE_INPUT'; // input 값 변경
const SET_ERROR = 'auth/SET_ERROR';
const CHECK_EMAIL_EXIST = 'auth/CHECK_EMAIL_EXIST';

export const changeInput = createAction(CHANGE_INPUT);
export const setError = createAction(SET_ERROR);
export const checkEmailExist = createAction(CHECK_EMAIL_EXIST, AuthAPI.checkEmailExist);

const initialState = Map({
    register: Map({
        form: Map({
            email: '',
            username: '',
            password: '',
            passwordConfirm: ''
        }),
        exists: Map({
            email: false,
            password: false
        }),
        error: null
    }),
    login: Map({
        form: Map({
            email: '',
            password: ''
        }),
        error: null
    }),
    result: Map({})
});

export default handleActions({
    [CHANGE_INPUT]: (state, action) => {
        const { form, name, value } = action.payload;
        return state.setIn([form, 'form', name], value);
    },
    [SET_ERROR]: (state, action) => {
        const { form, message } = action.payload;
        return state.setIn([form, 'error'], message);
    },
    ...pender({
        type: CHECK_EMAIL_EXIST,
        onSuccess: (state, action) => state.setIn(['register', 'exists'], action.payload.data.exists)
    })
}, initialState);

