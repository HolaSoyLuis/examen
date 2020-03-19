import React from 'react'
import { Link } from 'react-router-dom'

// // HOME
// import Home from './Home'

// // AUTH
// import Login from './Auth/Login'
// import Register from './Auth/Register'

// // LOCATION
// import LocationIndex from './Location/Index'
// import LocationCreate from './Location/Create'
// import LocationEdit from './Location/Edit'

// // PACKAGE
// import PackageIndex from './Package/Index'
// import PackageCreate from './Package/Create'
// import PackageEdit from './Package/Edit'

export default function Nav (props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to="/">Packages</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" href="#">Link</Link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link class="dropdown-item" href="/">Action</Link>
                        <Link class="dropdown-item" href="#">Another action</Link>
                        <div class="dropdown-divider"></div>
                        <Link class="dropdown-item" href="#">Something else here</Link>
                        </div>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link disabled" href="#">Disabled</Link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link">Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}