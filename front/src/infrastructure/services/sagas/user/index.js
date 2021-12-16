import { spawn, call, takeLatest, put, all } from 'redux-saga/effects'
import { userActions } from '../../../../application/actions/user'
// import { loadersActions } from '../../../../application/actions/ui_loaders'
import api from '../../../api'

const apiUser = api(process.env.REACT_APP_URL)

export function* fetchUser(params) {
  try {
    const { active, birthDate } = params.payload
    const body = {
      "active": active,
      "birthDate": birthDate
    }

    // yield put(loadersActions.verificacionLoader({ isLoading: true }));

    const { data } = yield call(apiUser.post, 'user', body, null)

    // yield put(loadersActions.verificacionLoader({ isLoading: false }));

    if (data) {
      yield put(userActions.userSuccess({ userResponse: data }))
    } else {
      yield put(userActions.userError())
    }
  } catch {
    yield all([
      put(userActions.userError())
    ]);
  }
}

export function* watchFetchUser() {
  yield takeLatest(userActions.user.type, fetchUser)
}

export default function* rootSaga() {
  yield spawn(watchFetchUser)
}