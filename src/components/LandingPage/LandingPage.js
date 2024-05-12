import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import ServiceSection from '../ServiceSection/ServiceSection'
import ChooseUsSection from '../ChooseUsSection/ChooseUsSection'
import TestimonialsSection from '../TestimonialsSection/TestimonialsSection'
import FAQSection from '../FAQSection/FAQSection'
import ContactSection from '../ContactSection/ContactSection'

const LandingPage = () => {
  return (
    <>
        <HeroSection />
        <ServiceSection />
        <ChooseUsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
    </>
  )
}

export default LandingPage
