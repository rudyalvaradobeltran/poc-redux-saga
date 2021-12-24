import React from 'react'
import ReactDOM from 'react-dom'
import App from './ui/pages'
import { Provider, ReactReduxContext } from 'react-redux'
import { store, persistor } from './application/config/store'
import { PersistGate } from 'redux-persist/integration/react'
import './index.css'

ReactDOM.render(
  <Provider store={store} context={ReactReduxContext}>
    <PersistGate loading={null} persistor={persistor}>	  
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)