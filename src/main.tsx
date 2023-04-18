import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore, applyMiddleware, combineReducers} from 'redux'
import { createLogger } from 'redux-logger'
import ThunkMiddleware from 'redux-thunk'
import App from './containers/App'
import { searchRobots, requestRobots } from './reducers'
import './index.css'
import 'tachyons'

const logger = createLogger()

const rootReducer = combineReducers({ searchRobots, requestRobots})
const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware, logger))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
