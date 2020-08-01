import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

export class Content extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Footer/>
            </div>
        )
    }
}

export default Content
