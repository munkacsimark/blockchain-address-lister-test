import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import * as serviceWorker from './serviceWorker'
import Splash from './pages/splash/splash'
import Address from './pages/address/address'
import Transaction from './pages/transaction/transaction'
import NoPage from './pages/no-page/no-page'

import './index.css'

const Layout = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route path='/' exact component={Splash} />
            <Route path='/address/:address' component={Address} />
            <Route path='/transaction/:transaction' component={Transaction} />
            <Route component={NoPage} />
          </Switch>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

ReactDOM.render(<Layout />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
