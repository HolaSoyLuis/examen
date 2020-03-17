import React from 'react'
import axios from 'axios'
import Nav from '../Nav'

class Register extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render () {
        return (
            <div>
                <Nav />
                <div>
                    This is the register page
                </div>
            </div>
        )
    }
}

export default Register