import React from 'react'
import {Link} from 'react-router-dom'

const withLogin = (WrappedComponent) => {
    return class WithLogin extends React.Component {
        constructor(props){
            super(props)
        }

        render () {
            if (sessionStorage.getItem("access") != null && sessionStorage.getItem('refresh') != null)
                return <WrappedComponent {...this.props}/>
            else return (
                <div>
                    Please, login first!
                    <Link className="btn btn-warning" to="/login">Login</Link>
                </div>
            )
        }
    }
}

export default withLogin