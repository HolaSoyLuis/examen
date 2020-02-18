import React from 'react'
import axios from 'axios'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Create from './Create'
import Edit from './Edit'

class Package extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        data: []
    }

    componentDidMount(e){
        axios.get('http://127.0.0.1/')
    }

    render () {

        const urls = (
            <BrowserRouter>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/create">Create</Link>
                            </li>
                            <li>
                                <Link to="/edit">Edit</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/create">
                            <Create />
                        </Route>
                        <Route path="/edit">
                            <Edit />
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
        
        return (
            <div>
                {urls}
                Package (index)
            </div>
        )
    }
}

export default Package