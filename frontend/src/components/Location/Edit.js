import React from 'react'
import axios from 'axios'
import Nav from '../Nav'
import SERVER from '../Global'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'

class Edit extends React.Component {
    constructor(props){
        super(props)
        
        this.status = {
            data: {
                id: 0,
                place: '',
            }
        }

        this.inputHandle = this.inputHandle.bind(this)
        this.postData = this.postData.bind(this)
    }

    inputHandle(e){
        this.setState({
            data: {
                place: e.target.value
            } 
        })
    }

    componentDidMount(){
        axios({
            method: 'GET',
            // url: SERVER + '/schema/location-view/' + this.props.match.params.id,
            url: SERVER + '/schema/location-view/1',
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('access')
            }
        })
        .then((response) => {
            console.log(response)
            this.setState({
                data: {
                    id: response.data.id,
                    place: response.data.place,
                }
            })
        })
        .catch(error => console.log(error))
    }

    postData(e){
        e.preventDefault()
        axios({
            method: 'PUT',
            url: SERVER + '/schema/location-update/' + this.state.data.id,
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
                    // 
                })
        })
        .catch(error => console.log(error))
    }

    render () {
        return (
            // <div>
            //     <Nav />
            //     <div className="container mt-3 mb-3">
            //         <div className="row justify-content-center">
            //             <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
            //                 <div className="card">
            //                     <div className="card-header">Register new location</div>
            //                     <div className="card-body">
            //                         <form onSubmit={this.postData}>
            //                             <div className="form-group">
            //                                 <label>Location's name:</label>
            //                                 <input type="text" className="form-control" onChange={this.inputHandle} value={this.state.data.place}/>
            //                             </div>
            //                             <div className="form-group text-center">
            //                                 <button className="btn btn-primary">Submit</button>
            //                             </div>
            //                         </form>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
            <div></div>
        )
    }
}

export default Edit