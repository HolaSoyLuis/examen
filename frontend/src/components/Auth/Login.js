import React from 'react'
import axios from 'axios'
import Nav from '../Nav'

class Login extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            credentials: {
                username: '',
                password: ''
            },
            auth: {}
        }
        this.login = this.login.bind(this)
    }  

    login = (e) => {
        e.preventDefault()
        axios.post(
            'http://localhost:8000/account/login/',
            // 'http://192.168.0.106:8000/account/login/',
            {
                username: this.state.credentials.username,
                password: this.state.credentials.password,
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )
        .then((response) => {
            this.setState({
                auth: response.data,
                credentials: {
                    username: '',
                    password: '',
                }
            })
            sessionStorage.setItem('access', this.state.auth.access)
            sessionStorage.setItem('refresh', this.state.auth.refresh)
            console.log('access: ', sessionStorage.getItem('access'))
            console.log('refresh: ', sessionStorage.getItem('refresh'))
        })
    }

    //generic input
    inputHandle = e => {
        let input = this.state.credentials
        input[e.target.name] = e.target.value
        this.setState({
            credentials: input
        })
    }

    render () {
        return (
            <div>
                <Nav />
                <div className="container mt-3 mb-3">
                    <div className="row justify-content-center">
                        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                            <div className="card">
                                <div className="card-header">
                                    <div className="text-center">Sign In</div>
                                </div>
                                <div className="card-body">
                                    <form method="POST" onSubmit={this.login}>
                                        <div className="form-group">
                                            <label>Username:</label>
                                                <input type="text" name="username" value={this.state.credentials.username} onChange={this.inputHandle} className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Password:</label>
                                                <input type="password" name="password" value={this.state.credentials.password} onChange={this.inputHandle} className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <div className="text-center">
                                                <button className="btn btn-primary">LogIn</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login