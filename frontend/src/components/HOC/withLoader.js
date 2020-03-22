import React from 'react'

const withLoader = (propValue, WrappedComponent) => {
    return class WithLoader extends React.Component {
        constructor(props){
            super(props)
        }

        render () {
            return this[propValue].lenght == 0
            ? <h1>Loading content</h1>
            : <WrappedComponent {...this.props}/>
        }
    }
}

export default withLoader