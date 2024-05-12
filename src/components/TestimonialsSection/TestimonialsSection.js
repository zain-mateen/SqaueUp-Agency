import React from 'react'
import HeaderInner from '../Header/HeaderInner'
import TestimonialsCart from './TestimonialsCart';
import { TestimonialsSectionData } from '../ArraySection/TestimonialsSectionArray';
import './TestimonialsSection.scss';

import bg from '../../img/service-section-wrapper-bg.png'

const TestimonialsSection = () => {
    return (
        <section className='TestimonialsSection'>
            <div className='container_fluid'>
                <HeaderInner 
                    WrapperHeading='What our Clients say About us'
                    WrapperDescription="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
                    WrapperBackground={bg}
                />
                <div className='row row_custom'>
                    {TestimonialsSectionData.map((data)=>{
                        return (
                            <TestimonialsCart 
                                key={data.id}
                                TestimonialsCartClass= 'col-lg-6 col-md-6'
                                TestimonialsCartHeading= {data.TestimonialsCartHeading}
                                TestimonialsCartDescription= {data.TestimonialsCartDescription}
                                TestimonialsCartCreatorImage= {data.TestimonialsCartCreatorImage}
                                TestimonialsCartCreatorName={data.TestimonialsCartCreatorName}
                                TestimonialsCartCreatorProfession= {data.TestimonialsCartCreatorProfession}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection
