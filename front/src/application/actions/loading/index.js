import { createSlice, createAction } from '@reduxjs/toolkit';
import initialState from '../../../domain/ui/loading';

function setLoading(state, action) {
  console.log(state, action)
  const { loading } = action.payload;
  state.loading = loading;
}

const loading = createAction('loading');

const loadingReducer = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading
  },
})

export const loadingActions = {
  ...loadingReducer.actions,
  loading
}

export default loadingReducer.reducer;