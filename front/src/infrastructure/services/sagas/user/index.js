import { spawn, call, takeLatest, put, all } from 'redux-saga/effects'
import { userActions } from '../../../../application/actions/user'
import { loadingActions } from '../../../../application/actions/loading'
import api from '../../../api'

const apiUser = api(process.env.REACT_APP_URL)

export function* fetchUser(params) {
  try {
    const { active, birthDate } = params.payload
    const body = {
      "active": active,
      "birthDate": birthDate
    }

    yield put(loadingActions.setLoading({ loading: true }))

    const { data } = yield call(apiUser.get, 'user', body, null)
    
    yield put(loadingActions.setLoading({ loading: false }))

    if (data) {
      yield put(userActions.userSuccess({ userResponse: data }))
    } else {
      yield put(userActions.userError())
    }
  } catch(error) {
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