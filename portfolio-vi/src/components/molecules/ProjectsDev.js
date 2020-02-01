import React, { Component } from 'react'
import H1 from '../atoms/H1'
import { Paragraph } from '../atoms/Paragraph'
import Divider from '@material-ui/core/Divider';




export class ProjectsDev extends Component {
    render() {
        return (
            <div>
                <div>
                    <H1 title='Mis Proyectos' />
                </div>
                <div>
                <Divider variant="middle" />
                </div>
                <div>
                    <Paragraph>Y yo s</Paragraph>
                </div>

            </div>
        )
    }
}