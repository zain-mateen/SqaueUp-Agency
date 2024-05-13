import React from 'react';

import HeaderInner from '../Header/HeaderInner';
import ContactForm from '../ContactSection/ContactForm';
import FAQSection from '../FAQSection/FAQSection';

import './ContactPage.scss';

import bg from '../../img/service-section-wrapper-bg.png';
import { Envelope, MapPinLine, Phone } from '@phosphor-icons/react';

const ContactPage = () => {
    return (
        <div className='ContactPage'>
            <div className='container_fluid'>
                <HeaderInner 
                    WrapperHeading='Contact Us'
                    WrapperDescription='Get in touch with us today and let us help you with any questions or inquiries you may have.'
                    WrapperBackground={bg}
                />
                <div className='cta_otr'>
                    <ul className='cta_ul'>
                        <li className='cta_li'>
                            <a href='mailto:zainmateen259@gmail.com' className='cta_a'>
                                <div className='cta_icon_otr'>
                                    <Envelope size={30} weight='fill' />
                                </div>
                                <p className='cta_text heading-mm'>zainmateen259@gmail.com</p>
                            </a>
                        </li>
                        <li className='cta_li'>
                            <a href='tel:+923221713121' className='cta_a'>
                                <div className='cta_icon_otr'>
                                    <Phone size={30} weight='fill' />
                                </div>
                                <p className='cta_text heading-mm'>+92 322 1713 121</p>
                            </a>
                        </li>
                        <li className='cta_li'>
                            <div href='/' className='cta_div'>
                                <div className='cta_icon_otr'>
                                    <MapPinLine size={30} weight='fill' />
                                </div>
                                <p className='cta_text heading-mm'>Get Location</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='contact_form_main'>
                    <div className='row row_custom'>
                        <div className='col-lg-8 col_contact_otr'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
                <FAQSection />
            </div>
        </div>
    );
}

export default ContactPage;
