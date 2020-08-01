import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export class Bootstrap extends Component {
    render() {
        return (
            <div>
                <span className='btn btn-danger'>Bootstrap</span>
                <FontAwesomeIcon icon="coffee" />
            </div>
        )
    }
}

export default Bootstrap
