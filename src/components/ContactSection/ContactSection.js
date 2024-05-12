import React from 'react'
import ThemeBtn from '../ThemeBtn/ThemeBtn'
import './ContactSection.scss'

import logo from '../../img/logo.png'

const ContactSection = () => {
    return (
        <section className='ContactSection'>
            <div className='container_fluid'>
                <div className='wrapper'>
                    <div className='wrapper_inr'>
                        <div className='logo_otr'>
                            <img className='logo' src={logo} alt='logo' />
                        </div>
                        <h2 className='heading heading-h2'>Thank you for your Interest in SquareUp.</h2>
                        <p className='desc heading-s'>
                            We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.
                        </p>
                        <div className='action_otr'>
                            <ThemeBtn 
                                ButtonClass='primary_btn'
                                ButtonText='Start Project'
                            />
                        </div>
                    </div>
                </div>
                <div className='row row_custom'>
                    <div className='col-lg-8 col_contact_otr'>
                        <form className='col_contact_inr'>
                            <div className='input_main'>
                                <div className='input_otr'>
                                    <label className='input_label heading-lm' for='name'>Full Name</label>
                                    <input className='input heading-s' type='name' id='name' name='name' placeholder='Type Here' required />
                                </div>
                                <div className='input_otr'>
                                    <label className='input_label heading-lm' for='email'>Email</label>
                                    <input className='input heading-s' type='email' id='email' name='email' placeholder='Type Here' required />
                                </div>
                            </div>
                            <div className='selection_otr'>
                                <p className='selection_heading heading-lm'>Why are you contacting us?</p>
                                <ul className='selection_ul'>
                                    <li className='selection_li'>
                                        <input className='checkbox' type="checkbox" name="my-checkbox" id="opt-in" />
                                        <label className='selection_li_text heading-s' for="opt-in">Web Design</label>
                                    </li>
                                    <li className='selection_li'>
                                        <input className='checkbox' type="checkbox" name="my-checkbox" id="opt-in" />
                                        <label className='selection_li_text heading-s' for="opt-in">Collaboration</label>
                                    </li>
                                    <li className='selection_li'>
                                        <input className='checkbox' type="checkbox" name="my-checkbox" id="opt-in" />
                                        <label className='selection_li_text heading-s' for="opt-in">Mobile App Design</label>
                                    </li>
                                    <li className='selection_li'>
                                        <input className='checkbox' type="checkbox" name="my-checkbox" id="opt-in" />
                                        <label className='selection_li_text heading-s' for="opt-in">Others</label>
                                    </li>
                                </ul>
                            </div>
                            {/* <div className='budget_otr'>
                                <div className='budget_content'>
                                    <p className='budget_heading heading-h5'>Your Budget</p>
                                    <p className='budget-text heading-s'>Slide to indicate your budget range</p>
                                </div>
                            </div> */}
                            <div className='message_main'>
                                <div className='message_inr'>
                                    <label className='message_label heading-lm' for='message'>Your Message</label>
                                    <textarea className='textarea heading-s' type='text' id='message' placeholder='Type Here' />
                                </div>
                            </div>
                            <div className='action_otr'>
                                <input className='submit_btn primary_btn' type='submit' value='Submit' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
