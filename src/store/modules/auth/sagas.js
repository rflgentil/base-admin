import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';
import { loginSuccess, loginFailure } from './actions';

export function* login({ payload }) {
    try {
        const { email, password } = payload;

        const response = yield call(api.post, 'sessions', {
            email,
            password,
        });

        const { token, user } = response.data;

        yield put(loginSuccess(token, user));

        history.push('/');
    } catch (error) {
        toast.error(error.response.data.error);
        yield put(loginFailure());
    }
}

export function logout() {
    history.push('/login');
}

export default all([
    takeLatest('@auth/LOGIN_REQUEST', login),
    takeLatest('@auth/LOGOUT', logout),
]);
