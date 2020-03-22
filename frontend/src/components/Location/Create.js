import React from 'react'
import Nav from '../Nav'
import axios from 'axios'
import SERVER from '../Global'

class Create extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            input: ''
        }
        this.inputHandle = this.inputHandle.bind(this)
        this.postData = this.postData.bind(this)
    }

    inputHandle(e){
        this.setState({
            input: e.target.value
        })
    }

    postData(e){
        e.preventDefault()
        axios({
            method: 'POST',
            url: SERVER + '/schema/location-create/',
            data: {
                place: this.state.input
            },
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('access')
            }
        })
        .then((response) => {
            if (response.status == 200)
                this.setState({
                    input: ''
                })
        })
        .catch(error => console.log(error))
    }

    render () {
        return (
            <div>
                <Nav />
                <div className="container mt-3 mb-3">
                    <div className="row justify-content-center">
                        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                            <div className="card">
                                <div className="card-header">Register new location</div>
                                <div className="card-body">
                                    <form onSubmit={this.postData}>
                                        <div className="form-group">
                                            <label>Location's name:</label>
                                            <input type="text" className="form-control" onChange={this.inputHandle} value={this.state.input}/>
                                        </div>
                                        <div className="form-group text-center">
                                            <button className="btn btn-primary">Submit</button>
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

export default Create