import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import SERVER from '../Global'


class Item extends React.Component {
    constructor(props){
        super(props)
        this.deleteItem = this.deleteItem.bind(this)
    }

    deleteItem(e){
        e.preventDefault()
        axios({
            method: 'DELETE',
            url: SERVER + '/schema/location-delete/' + this.props.id + '/',
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('access')
            }
        })
        .then((response) => {
            console.log(response)
            if(response.status == 200)
                this.props.getData()
        })
        .catch(error => console.log(error))
    }

    render () {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.place}</td>
                <td>{this.props.created_at}</td>
                <td>{this.props.updated_at}</td>
                <td>
                    <Link to={'/location/edit/' + this.props.id} className="btn btn-info">
                        Edit
                    </Link>
                </td>
                <td>
                    <form onSubmit={this.deleteItem}>
                        <button className="btn btn-warning">Delete</button>
                    </form>
                </td>
            </tr>
        )
    }
}

export default Item