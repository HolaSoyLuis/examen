import React from 'react'

let Alert = (props) => {
    return (
        <div className={`alert alert-${props.variant} alert-dismissible fade show`} role="alert">
            <strong>{props.subject}</strong> {props.message}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">
                    &times;
                </span>
            </button>
        </div>
    )
}

export default Alert