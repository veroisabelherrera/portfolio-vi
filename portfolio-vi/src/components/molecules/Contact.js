import React, { Component } from 'react'
import { H1 } from '../atoms/H1'
import { Divider } from '@material-ui/core';
import { H2 } from '../atoms/H2'




export class Contact extends Component {
    render() {
        return (
            <div className="about-container">
                <div>
                    <div className="contact-title">
                    <H1><strong>Quieres saber más?</strong></H1>
                    </div>

                    <div className="description-container">
                        <div className="contact-h2">
                            <H2>Elige tu medio favorito</H2>
                        </div>

                        <div className="v-divider">
                            <Divider orientation="vertical" />
                        </div>

                        <div className="contact-container">
                            <div className="mail-container">
                                <img src={require('../../assets/email.svg')} className="icon-email" />
                    
                                <p className="mail">veroisabelhf@gmail.com</p>
                                
                            </div>

                            <div className="icon-socials">
                                    <a href="https://www.linkedin.com/in/veroisabelherrera/" target='_blank' rel="noopener noreferrer" alt='linkedin'><img src={require('../../assets/linkedin.svg')} className="icon-contact" /></a>
                                    <a href="https://github.com/veroisabelherrera" target='_blank' rel="noopener noreferrer">   <img src={require('../../assets/github.svg')} className="icon-contact" /></a>
                            </div>

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