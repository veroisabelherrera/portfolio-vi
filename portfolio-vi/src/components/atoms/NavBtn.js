import React from 'react'
import next from '../../assets/next.svg'
import previus from '../../assets/previus.svg'
import { Link } from 'react-router-dom'

export const NextBtn = () => (
    <div>
        <Link to="/sobremi">
            <img src={next} className="nav-btn"></img>
        </Link>

        <Link to="/">
            <img src={previus} className="nav-btn"></img>
        </Link>
    </div>
)