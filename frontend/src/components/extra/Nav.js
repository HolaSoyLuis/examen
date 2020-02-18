import React from 'react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

// login
import Login from '../Auth/Login'

// register
import Register from '../Auth/Register'

// location
import Location from '../Location/Index'

// package
import Package from '../Package/Index'

export default function Nav (props) {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                            <li>
                                <Link to="/location">Location</Link>
                            </li>
                            <li>
                                <Link to="/package">Package</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/location">
                            <Location />
                        </Route>
                        <Route path="/package">
                            <Package />
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}