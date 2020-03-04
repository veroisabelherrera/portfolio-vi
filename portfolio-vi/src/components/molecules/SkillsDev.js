import React, { Component } from 'react'
import { H1 } from '../atoms/H1'
import { H3 } from '../atoms/H3'
import Divider from '@material-ui/core/Divider';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';




export class SkillsDev extends Component {
    render() {
        return (
            <div className="skills-container">
                <div>
                    <div className="skills-title">
                    <H1><strong>Herramientas</strong></H1>
                    </div>

                    <div className="skills-icons-container">
                        <div className="skills-h2">
                            <H3>Desarrollo web</H3>
                        </div>

                        <div className="v-divider">
                            <Divider orientation="vertical" />
                        </div>

                        <div className="skills-list-icons">
                            <img src={require('../../assets/skills-a_02.png')} className="icon-skills" />
                            <img src={require('../../assets/skills-a_03.png')} className="icon-skills" />
                            <img src={require('../../assets/skills-a_04.png')} className="icon-skills" />
                            <img src={require('../../assets/skills-a_05.png')} className="icon-skills" />
                            <img src={require('../../assets/skills-a_06.png')} className="icon-skills" />
                        </div>
                    </div>

                    <div className="skills-icons-container">
                        <div className="skills-h2">
                            <H3>Diseño y prototipado web</H3>
                        </div>

                        <div className="v-divider">
                            <Divider orientation="vertical" />
                        </div>

                        <div className="skills-list-icons">
                            <img src={require('../../assets/skills-a_07.png')} className="icon-skills" />
                            <img src={require('../../assets/skills-a_08.png')} className="icon-skills" />
                            <img src={require('../../assets/skills-a_09.png')} className="icon-skills" />
                            <img src={require('../../assets/skills-a_10.png')} className="icon-skills" />
                            <img src={require('../../assets/skills-a_11.png')} className="icon-skills" />
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