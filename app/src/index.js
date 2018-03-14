import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import createHistory from 'history/createBrowserHistory'

import App from 'components/App'

const history = createHistory()


ReactDOM.render(
  <Provider>
    <App />
  </Provider>, 
  document.getElementById('root')
)
