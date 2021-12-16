import { createAction, createSlice } from '@reduxjs/toolkit'
import initialState from '../../../domain/entities/user'

const userSuccess = (state, action) => {
  const { userResponse } = action.payload
  state.response = userResponse
  state.responseError = false
}

const userError = (state) => {
  state.response = {}
  state.responseError = true
}

const user = createAction('user');

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userSuccess,
    userError,
  },
})

export const userActions = {
  ...userReducer.actions,
  user,
}

export default userReducer.reducer