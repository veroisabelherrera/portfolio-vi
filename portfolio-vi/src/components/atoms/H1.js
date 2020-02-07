import React from 'react'

export const H1 = ({children}) => (
<p style={H1Style}>{children}</p>
)

const H1Style = {
    color: '#525252',
    fontSize: '36px'
}





/*
import React, { Component } from 'react'


export default class H1 extends Component {
    render () {
        return (
            <div>
                <h1
                  style={this.props.style}  
                  className={this.props.className}>
                      {this.props.title}
                </h1>
            </div>
        )
    }
}
*/
