import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss';

import brandLogo from '../../img/brand-logo.png';
import mailIcon from '../../img/mail-icon.png'
import phoneIcon from '../../img/phone-icon.png'
import mapIcon from '../../img/map-icon.png'
import facebookIcon from '../../img/facebook-icon.png'
import twitterIcon from '../../img/twitter-icon.png'
import linkedinIcon from '../../img/linkedin-icon.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container_fluid'>
                <div className='footer_top'>
                    <div className='logo_main'>
                        <Link className='logo_otr'>
                            <img className='logo' src={brandLogo} alt='Brand LOGO' />
                        </Link>
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
                        <div className='social_otr'>
                            <p className='social_heading heading-mm'>Stay Connected</p>
                            <ul className='social_ul'>
                                <li className='social_li'>
                                    <a className='social_a' href='/'>
                                        <img className='social_icon' src={facebookIcon} alt='Facebook Icon' />
                                    </a>
                                </li>
                                <li className='social_li'>
                                    <a className='social_a' href='/'>
                                        <img className='social_icon' src={twitterIcon} alt='Twitter Icon' />
                                    </a>
                                </li>
                                <li className='social_li'>
                                    <a className='social_a' href='/'>
                                        <img className='social_icon' src={linkedinIcon} alt='LinkedIn Icon' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className='responsive_social_otr'>
                        <p className='social_heading heading-mm'>Stay Connected</p>
                        <ul className='social_ul'>
                            <li className='social_li'>
                                <a className='social_a' href='/'>
                                    <img className='social_icon' src={facebookIcon} alt='Facebook Icon' />
                                </a>
                            </li>
                            <li className='social_li'>
                                <a className='social_a' href='/'>
                                    <img className='social_icon' src={twitterIcon} alt='Twitter Icon' />
                                </a>
                            </li>
                            <li className='social_li'>
                                <a className='social_a' href='/'>
                                    <img className='social_icon' src={linkedinIcon} alt='LinkedIn Icon' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='footer_bottom'>
                    <div className='link_otr'>
                        <ul className='link_ul'>
                            <li className='link_li'>
                                <div className='icon_otr'>
                                    <img className='icon' src={mailIcon} alt='Mail Icon' />
                                </div>
                                <a className='link_a heading-s' href='/'>zainmateen259@gmail.com</a>
                            </li>
                            <li className='link_li'>
                                <div className='icon_otr'>
                                    <img className='icon' src={phoneIcon} alt='Phone Icon' />
                                </div>
                                <a className='link_a heading-s' href='/'>0322 1713 121</a>
                            </li>
                            <li className='link_li'>
                                <div className='icon_otr'>
                                    <img className='icon' src={mapIcon} alt='Map Icon' />
                                </div>
                                <p className='link_text heading-s'>Somewhere in the World</p>
                            </li>
                        </ul>
                    </div>
                    <div className='copyright_text_otr'>
                        <p className='copyright_text heading-s'>© 2024 SquareUp. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
