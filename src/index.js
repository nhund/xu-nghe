import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './redux/Store'
import XuNghe from '../src/components/home/index'
import News from '../src/components/news/News'
import Contact from '../src/components/contact/contact'
import DetailNews from '../src/components/news/DetailNews'
import DetailProduct from '../src/components/product/DetailProduct'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
        <Component {...props} />
    )}
  />
)

const App = () => (
    <Provider store={Store}>
        <Router>
            <div>
              <PrivateRoute path='/xu-nghe' component={XuNghe} />
              <PrivateRoute path='/tin-tuc' component={News} />
              <PrivateRoute path='/lien-he' component={Contact} />
              <PrivateRoute path='/chi-tiet' component={DetailNews} />
              <PrivateRoute path='/chi-tiet-san-pham' component={DetailProduct} />
            </div>
        </Router>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
