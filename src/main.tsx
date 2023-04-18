import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App'
import './index.css'
import { searchRobots } from './reducers';

const store = createStore(searchRobots)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
)
