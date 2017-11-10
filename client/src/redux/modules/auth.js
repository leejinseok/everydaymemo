import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as AuthAPI from 'lib/api/auth';

const CHANGE_INPUT = 'auth/CHANGE_INPUT'; // input 값 변경
const SET_ERROR = 'auth/SET_ERROR';

const CHECK_EMAIL_EXIST = 'auth/CHECK_EMAIL_EXIST';
const LOCAL_REGISTER = 'auth/LOCAL_REGISTER';
const LOCAL_LOGIN = 'auth/LOCAL_LOGIN';

export const changeInput = createAction(CHANGE_INPUT);
export const setError = createAction(SET_ERROR);

export const checkEmailExist = createAction(CHECK_EMAIL_EXIST, AuthAPI.checkEmailExist);
export const localRegister = createAction(LOCAL_REGISTER, AuthAPI.localRegister);
export const localLogin = createAction(LOCAL_LOGIN, AuthAPI.localLogin);

const initialState = Map({
    register: Map({
        form: Map({
            email: '',
            username: '',
            password: '',
            passwordConfirm: ''
        }),
        exists: false,
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
    }),
    ...pender({
        type: LOCAL_REGISTER,
        onSuccess: (state, action) => state.setIn(['result'], action.payload.data)
    }),
    ...pender({
        type: LOCAL_LOGIN,
        onSuccess: (state, action) => state.setIn(['result'], action.payload),
        onFailure: (state, action) => state.setIn(['result'], 'no exist')
    })
}, initialState);

