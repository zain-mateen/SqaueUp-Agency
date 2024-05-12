import React from 'react'
import HeaderInner from '../Header/HeaderInner'
import Accordion from 'react-bootstrap/Accordion';
import FAQCart from './FAQCart';
import { FaqData } from '../ArraySection/FAQArray';
import './FAQSection.scss'

import bg from '../../img/service-section-wrapper-bg.png'

const FAQSection = () => {
    return (
        <section className='FAQSection'>
            <div className='container_fluid'>
                <HeaderInner 
                    WrapperHeading='Frequently Asked Questions'
                    WrapperDescription='Still you have any questions? Contact our Team via hello@squareup.com'
                    WrapperBackground={bg}
                />
                <div className='row row_custom'>
                    <div className='col-lg-8 col-md-10 col_FAQ'>
                        {FaqData.map((data)=>{
                            return (
                                <Accordion defaultActiveKey="0">
                                    <FAQCart
                                        key={data.id}
                                        KeyNum={data.KeyNum}
                                        FaqCartNumber={data.FaqCartNumber}
                                        FaqCartHeading={data.FaqCartHeading}
                                        FAQCartDesc={data.FAQCartDesc}
                                    />
                                </Accordion>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQSection
