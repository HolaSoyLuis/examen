import React from 'react'
import ReactDOM from 'react-dom'
// import 'bootstrap/dist/css/bootstrap.css'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// HOME
import Home from './components/Home'

// AUTH
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'

// LOCATION
import LocationIndex from './components/Location/Index'
import LocationCreate from './components/Location/Create'
import LocationEdit from './components/Location/Edit'

// PACKAGE
import PackageIndex from './components/Package/Index'
import PackageCreate from './components/Package/Create'
import PackageEdit from './components/Package/Edit'

let urls = (
    <Router>
        <Switch>
            {/* Home */}
            <Route exact path="/" component={Home}></Route>
            {/* Auth */}
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            {/* Location */}
            <Route path="/location/index" component={LocationIndex}></Route>
            <Route path="/location/create" component={LocationCreate}></Route>
            <Route path="/location/edit/:id" component={LocationEdit}></Route>
            {/* Package */}
            <Route path="/package/index" component={PackageIndex}></Route>
            <Route path="/package/create" component={PackageCreate}></Route>
            <Route path="/package/edit/:id" component={PackageEdit}></Route>
        </Switch>
    </Router>
)

ReactDOM.render(urls, document.getElementById('root'))