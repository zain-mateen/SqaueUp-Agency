import React from 'react'
import { Link } from 'react-router-dom';
import ThemeBtn from '../ThemeBtn/ThemeBtn'
import './Header.scss';

import brandLogo from '../../img/brand-logo.png'
import menuIcon from '../../img/menu-icon.svg'

const Header = () => {
  return (
    <header class="header">
        <div class="container_fluid">
            <div class="header_inr">
                <div class="logo_main">
                    <Link  class="logo_otr">
                        <img class="logo" src={brandLogo} alt="Brand LOGO" />
                    </Link>
                    <div class="menu_icon_otr">
                        <img className='icon' src={menuIcon} alt='Menu Icon' />
                    </div>
                </div>
                <nav class="nav_otr">
                    <ul class="menu_ul">
                        <li class="menu_li">
                            <Link  class="menu_link heading-sm" to='/'>
                                Home
                            </Link>
                        </li>
                        <li class="menu_li">
                            <Link  class="menu_link heading-sm" to='/service'>
                                Services
                            </Link>
                        </li>
                        <li class="menu_li">
                            <Link  class="menu_link heading-sm" to='/work'>
                                Work
                            </Link>
                        </li>
                        <li class="menu_li">
                            <Link  class="menu_link heading-sm" to='/process'>
                                Process
                            </Link>
                        </li>
                        <li class="menu_li">
                            <Link  class="menu_link heading-sm" to='/about'>
                                About
                            </Link>
                        </li>
                        <li class="menu_li">
                            <Link class="menu_link heading-sm" to='/career'>
                                Careers
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className='action_otr'>
                    <ThemeBtn 
                        ButtonClass='contact_btn primary_btn'
                        ButtonText='Contact Us'
                    />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
