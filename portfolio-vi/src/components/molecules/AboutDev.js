import React, { Component } from 'react'
import { H1 } from '../atoms/H1'
import { H2 } from '../atoms/H2'
import { Paragraph } from '../atoms/Paragraph'
import { Divider } from '@material-ui/core';
import { Link } from 'react-router-dom'




export class AboutDev extends Component {
    render() {
        return (
                <div className="about-container">
                    <div>
                        <div className="about-title">
                            <H1><strong>Sobre mi</strong></H1>
                        </div>

                        <div className="description-container">
                            <div className="about-h2">
                                <H2>Mi historia profesional en corto</H2>
                            </div>

                            <div className="v-divider">
                                <Divider orientation="vertical" />
                            </div>

                            <div className="about-text">
                                <Paragraph>
                                    Con más de 5 años de experiencia en el mundo del diseño digital
                                    y con diversas experiencias en la planificación,
                                    coordinación y desarrollo de proyectos digitales,
                                    me fui interesando y sumergiendo en el código, curiosidad que me
                                    llevó a ser parte de Laboratoria, y que hoy en día
                                    me hace desarrolladora Front-end.
                        </Paragraph>
                            </div>
                        </div>

                    </div>
                </div>
        )
    }
}

const titleH1 = {
    color: '#444444',
    fontSize: '36px'
}


