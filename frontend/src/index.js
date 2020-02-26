import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.css'
// import Provider from 'react-redux'
// import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
/*
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

// login
import Login from './components/Auth/Login'

// register
import Register from './components/Auth/Register'

// location
import Location from './components/Location/Location'

// package
import Package from './components/Package/Package'
*/
const Root = [
    // <BrowserRouter>
    //     <Switch>
    //         {/* Auth */}
    //         <Route path='/login' component={Login} />
    //         <Route path='/register' component={Register} />
    //         <Route path='/location' component={Location} />
    //         <Route path='/package' component={Package} />
    //     </Switch>
    // </BrowserRouter>
]
// ReactDOM.render(Root, document.getElementById('root'))

ReactDOM.render(<App />, document.getElementById('root'))