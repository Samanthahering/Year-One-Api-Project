import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from './app'
import { Provider } from 'react-redux'
import store from '../store'
import MovieInfo from './MovieInfo'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path='/' component={App}/>
            <Route path='/:title' component={MovieInfo}/>
        </Router>
    </Provider>,
    document.getElementById('app')
)