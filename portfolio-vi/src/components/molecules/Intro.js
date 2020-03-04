import React, { Component } from 'react'
import { H1 } from '../atoms/H1'
import { H2 } from '../atoms/H2'
import Divider from '@material-ui/core/Divider';




export class Intro extends Component {
    render() {
        return (
            <div className="intro-container">
                <div className="text-intro-container">
                    <H1>Hola, soy <strong>Veronica Herrera</strong></H1>
                    <div>
                        <Divider variant="right" />
                    </div>
                    <div>
                        <H2>Desarrolladora Front-End</H2>
                        <H2>& Diseñadora Gráfica</H2>
                    </div>
                </div>

                <div className="photo-intro-container">
                    <img src={require('../../assets/photo.png')} className="intro-photo" />
                </div>

            </div>
        )
    }
}




