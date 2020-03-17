import React from 'react'
import axios from 'axios'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Create from './Create'
import Edit from './Edit'

class Index extends React.Component {
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
        return (
            <div>
                Package (index)
            </div>
        )
    }
}

export default Index