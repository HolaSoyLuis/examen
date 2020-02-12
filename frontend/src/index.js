import React from 'react'
import ReactDOM from 'react-dom'
// import Provider from 'react-redux'
// import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

// login
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'

// location
import Location from './components/Location/Location'

// package
import Package from './components/Package/Package'

const Root = [
    <BrowserRouter>
        <Switch>
            {/* Auth */}
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            {/* <Route path='/signout' component={SignOut} /> */}
            

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