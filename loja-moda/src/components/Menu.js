import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'
import logo from '../images/logo.png'

const DivMenu = Styled.div`
color: white;
background: #b3b4c087;
width: 73%;
height: 50px;
padding: 10px;
margin: 16px auto;
border-radius: 18px;

    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    align-items: center;

    .logo {
        width: auto;
        height: 96px;
        padding: 0 14px;
    }

    nav {
        display: flex;
        justify-content: flex-end;
    }

    nav li {
        margin: 0 16px;
        list-style: none;
        text-transform: uppercase;
    }

    nav .link {
        color: #000;
        text-decoration: none;
    }

    nav .link:hover {
        color:#9296a1;
    }
`

const Menu = () => {
    return (
        <DivMenu>
            <div className='box logo'>
                <img src={logo} className='logo' alt="logo" />
            </div>

            <nav>
                <li><Link to={'/'} className='link'>home</Link></li>
                <li><Link to={'/moda-feminina'} className='link'>moda feminina</Link></li>
                <li><Link to={'/moda-masculina'} className='link'>moda masculina</Link></li>
                <li><Link to={'/moda-infantil'} className='link'>moda infantil</Link></li>
                <li><Link to={'/sobre'} className='link'>sobre</Link></li>
            </nav>
        </DivMenu>
    )
}

export default Menu;