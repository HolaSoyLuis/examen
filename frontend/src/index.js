import React from 'react'
import ReactDOM from 'react-dom'
import Provider from 'react-redux'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

// location
import Location from './components/Location/Location'

// package
import Package from './components/Package/Package'

const Root = [
    <BrowserRouter>
        <Switch>
            {/* <Route path='signin' component={} />
            <Route path='signup' component={} />
            <Route path='signout' component={} />
            <Route path='signup' component={} />
            <Redirect from='/' to='signin'/> */}
            
            <Route path='/location' component={Location} />
            {/* <Route path='location/create' component={} />
            <Route path='location/edit/:item' component={} /> */}

            <Route path='/package' component={Package} />
            {/* <Route path='package/create' component={} />
            <Route path='package/edit/:item' component={} /> */}

        </Switch>
    </BrowserRouter>
]

ReactDOM.render(Root, document.getElementById('root'))