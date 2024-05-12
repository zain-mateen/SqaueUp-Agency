import React from 'react'
import ThemeBtn from '../ThemeBtn/ThemeBtn'
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <div className='HeroSection'>
        <div class="container_fluid">
            <div class="hero_inr">
                <h1 class="heading heading-h1">A Digital Product Studio that will Work</h1>
                <div class="tags_main">
                    <div class="tags_otr">
                        <p class="text heading-l">
                            For
                            <span class="text_inr">StartsUp</span>
                            ,
                            <span class="text_inr">Enterprise leaders</span>
                            ,
                            <span class="text_inr">Media & Publishers</span>
                            and
                            <span class="text_inr">Social Good</span>
                        </p>
                    </div>
                </div>
                <div class="action_main">
                    <div class="action_otr">
                        <ThemeBtn 
                            ButtonClass='work_btn border_btn'
                            ButtonText='Our Works'
                        />
                    </div>
                    <div class="action_otr">
                        <ThemeBtn 
                            ButtonClass='cta_btn primary_btn'
                            ButtonText='Contact Us'
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
