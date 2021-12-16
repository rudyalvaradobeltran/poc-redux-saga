import { combineReducers } from 'redux'
import user from './user'

const reducers = combineReducers({
  entities: combineReducers({
    user,
  }),
})

export default reducers