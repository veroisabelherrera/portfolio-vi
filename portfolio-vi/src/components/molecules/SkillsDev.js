import React, { Component } from 'react'
import H1 from '../atoms/H1'
import { Paragraph } from '../atoms/Paragraph'
import Divider from '@material-ui/core/Divider';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';




export class SkillsDev extends Component {
    render() {
        return (
            <div>
                <div>
                    <H1 title='Herramientas' />
                </div>
                <div>
                <Divider variant="middle" />
                </div>
                <div>
                    <Paragraph>Y yo s</Paragraph>
                </div>
                <div>
                <img src="https://img.icons8.com/ios/50/000000/javascript.png">
                </div>

            </div>
        )
    }
}