import React from 'react';
import HeaderInner from '../Header/HeaderInner';
import ServiceCart from './ServiceCart';
import { ServiceSectionData } from '../ArraySection/ServiceSectionArray';
import './ServiceSection.scss';

import serviceSerctionWrapperBackground from '../../img/service-section-wrapper-bg.png'

const ServiceSection = () => {
    return (
        <section className='ServiceSection'>
            <div className='container_fluid'>
                <HeaderInner 
                    WrapperHeading='Our Services'
                    WrapperDescription='Transform your brand with our innovative digital solutions that captivate and engage your audience.'
                    WrapperBackground={serviceSerctionWrapperBackground}                    
                />
                <div className='row row_custom'>
                    {ServiceSectionData.map((data)=>(
                        <ServiceCart 
                            key={data.id}
                            ServiceCartIcon={data.ServiceCartIcon}
                            ServiceCartClass= 'col-lg-4 col-md-6'
                            ServiceHeading={data.ServiceHeading}
                            ServiceDescription={data.ServiceDescription}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServiceSection
