import React from 'react'

export const H2 = ({children}) => (
<p className="text" style={H2Style}>{children}</p>
)

const H2Style = {
    color: '#525252',
    fontSize: '28px'
}