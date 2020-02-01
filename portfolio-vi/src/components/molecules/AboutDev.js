import React, { Component } from 'react'
import H1 from '../atoms/H1'
import { Paragraph } from '../atoms/Paragraph'
import Divider from '@material-ui/core/Divider';
import { H2 } from '../atoms/H2'




export class AboutDev extends Component {
    render() {
        return (
            <div>
                <div>
                    <H1 title='Sobre mi' style={titleH1} />
                </div>
                <div>
                    <H2>Yo soy el parrafo H2 con children</H2>
                </div>
                <div>
                    <Divider orientation="vertical" />
                </div>
                <div>
                    <Paragraph>Yo soy el titulo con children</Paragraph>
                </div>

            </div>
        )
    }
}

const titleH1={
    color: '#444444',
    fontSize: '36px'
}


