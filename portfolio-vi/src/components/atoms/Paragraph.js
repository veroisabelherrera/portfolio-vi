import React from 'react'

export const Paragraph = ({children}) => (
<p className="text" style={textStyle}>{children}</p>
)

const textStyle = {
    color: '#525252',
    fontSize: '15px',
}