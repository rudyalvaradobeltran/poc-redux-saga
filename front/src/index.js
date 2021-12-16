import React from 'react'
import ReactDOM from 'react-dom'
import App from './ui/pages'
import { Provider, ReactReduxContext } from 'react-redux'
import store from './application/config/store'

ReactDOM.render(
  <Provider store={store} context={ReactReduxContext}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)