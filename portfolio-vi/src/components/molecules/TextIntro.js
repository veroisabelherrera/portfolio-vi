import React, { Component } from 'react'
import H1 from '../atoms/H1'
import { Paragraph } from '../atoms/Paragraph'
import Divider from '@material-ui/core/Divider';




export class TextIntro extends Component {
    render() {
        return (
            <div style={textIntroBox}>
                <div>
                    <H1 title='Hola soy el titulo con class' />
                </div>
                <div>
                <Divider variant="middle" />
                </div>
                <div>
                    <Paragraph>Y yo soy el párrafo <strong>con children</strong></Paragraph>
                </div>

            </div>
        )
    }
}

const textIntroBox={
    display:'flex',
    flexDirection:'column',
    width:'512px',
    background:'#FFFFFF',
    alignItems:'center',
    height: '700px',
    textAlign: 'right'
}


