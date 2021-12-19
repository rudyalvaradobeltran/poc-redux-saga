import { combineReducers } from 'redux'
import user from './user'
import loading from './loading'

const reducers = combineReducers({
  entities: combineReducers({
    user
  }),
  ui: combineReducers({
    loading
  })
})

export default reducers