import React, { Component } from 'react'

export const Paragraph = ({children}) => (
<p className="text" style={textStyle}>{children}</p>
)

const textStyle = {
    color: '#f2b705',
    fontSize: '14px',
}