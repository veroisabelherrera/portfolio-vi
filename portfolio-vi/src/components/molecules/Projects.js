import React, { Component } from 'react'
import { H1 } from '../atoms/H1'
import { H4 } from '../atoms/H4'




export class Projects extends Component {
    render() {
        return (
            <div className="projects-container">
                <div>
                    <div className="projects-title">
                    <H1><strong>Proyectos realizados</strong></H1>
                    </div>

                    <div className="projects-card-container">

                        <div className="project-card">
                            <img className="img-project" src={require('../../assets/Img-Project01.png')} />
                            <H4><strong>PokeLovers</strong></H4>
                            <div className="project-description">
                            <p>Aplicación web desarrollada en JavaScript, Html y Css. Su función principal es obtener y mostrar la data de la API Pokemon, además de brindarle la posibilidad al usuario de filtrarla y ordenarla según sus intereses de búsqueda.</p>
                            </div>
                            <div className="icon-project-container">
                             <a href="https://veroisabelherrera.github.io/SCL011-data-lovers/src/index.html" target='_blank' rel="noopener noreferrer" alt='linkedin'><img src={require('../../assets/web.svg')} className="icon-project" /></a>
                            <a href="https://github.com/veroisabelherrera/SCL011-data-lovers" target='_blank' rel="noopener noreferrer">   <img src={require('../../assets/github.svg')} className="icon-project" /></a>
                            </div>
                        </div>

                        <div className="project-card">
                            <img className="img-project" src={require('../../assets/Img-Project03.png')} />
                            <H4><strong>MenuToGo</strong></H4>
                            <div className="project-description">
                            <p>Aplicación web desarrollada en React JS. Su función principal es brindar al usuario la posibilidad de comprar y planificar sus almuerzos semanalmente, eligiendo su menu por día y configurando sus datos de entrega.</p>
                            </div>
                            <div className="icon-project-container">
                             <a href="https://www.menutogo.cl" target='_blank' rel="noopener noreferrer" alt='linkedin'><img src={require('../../assets/web.svg')} className="icon-project" /></a>
                            <a href="https://github.com/veroisabelherrera" target='_blank' rel="noopener noreferrer">   <img src={require('../../assets/github.svg')} className="icon-project" /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
