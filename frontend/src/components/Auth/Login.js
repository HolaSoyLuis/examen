import React from 'react'
import axios from 'axios'

class Login extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            credentials: {
                username: '',
                password: ''
            },
            auth_token: ''
        }

        this.login = this.login.bind(this)
    }

    /*
    login () {
        fetch('http://127.0.0.1:8000/user/authtoken/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.credentials),
        })
        .then((response) => console.log(response.json()))
        .then((data) => console.log('Success:', data))
        .catch((error) => console.log('Error:', error))
    }
    */
    
    login = () => {
        axios({
            method: 'POST',
            url: 'http://127.0.0.1:8000/user/authtoken/',
            data: {
                username: this.state.credentials.username,
                password: this.state.credentials.password,
            }
        })
        .then((response) => {
            if (response.status == 200) {
                console.log(response.statusText)
                this.setState({
                    auth_token: response.data
                })
            }
        })
        .catch(error => console.log(error))
        console.log(this.state.auth_token)
    }
    

    // login = () => {
    //     axios.post(
    //         'http://127.0.0.1:8000/user/authtoken/',
    //         {
    //             username: this.state.credentials.username,
    //             password: this.state.credentials.password,
    //         }
    //     )
    //     .then(response => console.log(response.data))
    //     .catch(error => console.log(error))
    // }

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
            <div className="container mt-3 mb-3">
                <div className="row justify-content-center">
                    <div className="col-5">
                        <div className="card">
                            <div className="card-header">
                                <div className="text-center">Sign In</div>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Username:</label>
                                            <input type="text" name="username" value={this.state.credentials.username} onChange={this.inputHandle} className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password:</label>
                                            <input type="password" name="password" value={this.state.credentials.password} onChange={this.inputHandle} className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <button onClick={this.login} className="btn btn-default">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login