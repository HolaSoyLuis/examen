import React from 'react'
import axios from 'axios'
import withLogin from '../HOC/withLogin'
import withLoader from '../HOC/withLoader'
import Nav from '../Nav'
import Item from './Item'

class Index extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
        this.getData = this.getData.bind(this)
    }

    componentDidMount(){
        axios({
            method: 'GET',
            url: 'http://localhost:8000/schema/location-list/',
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('access')
            }
        })
        .then((response) => {
            this.setState({
                data: response.data
            })
            console.log(this.state.list)
        })
        .catch(error => console.log(error))
    }

    getData(){
        axios({
            method: 'GET',
            url: 'http://localhost:8000/schema/location-list/',
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('access')
            }
        })
        .then((response) => {
            this.setState({
                data: response.data
            })
            console.log(this.state.list)
        })
        .catch(error => console.log(error))
    }

    render () {
    let fetchedData = this.state.data.map((item, i) => 
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.place}</td>
            <td>{item.created_at}</td>
            <td>{item.updated_at}</td>
        </tr>
    )

    let fetchedDataCom = this.state.data.map((item, i) => {
        return (
            <Item key={item.id} id={item.id} place={item.place} created_at={item.created_at} updated_at={item.updated_at} getData={this.getData} />
        )
    })
        return (
            <div>
                <Nav />
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col">
                            <h3>Registered locations</h3>
                            <table className="table table-striped">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>#</th>
                                        <th>Location name</th>
                                        <th>Created at</th>
                                        <th>Updated at</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {fetchedDataCom}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index
// export default withLogin(Index)