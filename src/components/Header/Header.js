import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import ThemeBtn from '../ThemeBtn/ThemeBtn'
import './Header.scss';

import brandLogo from '../../img/brand-logo.png'
import menuIcon from '../../img/menu-icon.svg'
import { X } from '@phosphor-icons/react';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const showSidebarMenu = () => setIsOpen(!isOpen);
    const closeSidebarMenu = () => setIsOpen(false);

    return (
        <Fragment>
            <div className={`overlay_main ${isOpen && "showSidebar"}`}>
                <div className='overlay_inr'>
                    <div class="logo_main">
                        <Link  class="logo_otr">
                            <img class="logo" src={brandLogo} alt="Brand LOGO" />
                        </Link>
                        <div class="close_icon_otr" onClick={closeSidebarMenu}>
                            <X size={24} />
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
                        <Link className='action_inr' to='/contact'>
                            <ThemeBtn 
                                ButtonClass='contact_btn primary_btn'
                                ButtonText='Contact Us'
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <header class="header">
                <div class="container_fluid">
                    <div class="header_inr">
                        <div class="logo_main">
                            <Link  class="logo_otr">
                                <img class="logo" src={brandLogo} alt="Brand LOGO" />
                            </Link>
                            <div class="menu_icon_otr" onClick={showSidebarMenu} >
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
                            <Link className='action_inr' to='/contact'>
                                <ThemeBtn 
                                    ButtonClass='contact_btn primary_btn'
                                    ButtonText='Contact Us'
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default Header
