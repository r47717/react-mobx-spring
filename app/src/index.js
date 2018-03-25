import React from 'react'
import ReactDOM from 'react-dom'
import DevTools from "mobx-react-devtools";
import { Provider } from 'mobx-react'
import { Router } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import App from 'components/App'
import appStore from 'stores/appStore'

const history = createHistory()

ReactDOM.render(
  <div>
    <DevTools />
    <Provider appStore={appStore}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </div>,
  document.getElementById('root')
)
