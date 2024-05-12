import React from 'react'
import HeaderInner from '../Header/HeaderInner'
import DigitalWorldSection from '../DigitalWorldSection/DigitalWorldSection'
import BlogCart from './BlogCart'
import HeaderWrapper from '../Header/HeaderWrapper'
import { BlogPageCartData } from '../ArraySection/BlogPageArray'
import './BlogPage.scss'

import bg from '../../img/service-section-wrapper-bg.png'

const BlogPage = () => {
    return (
        <div className='BlogPage'>
            <div className='container_fluid'>
                <HeaderInner 
                    WrapperHeading='Our Works'
                    WrapperDescription='Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.'
                    WrapperBackground={bg}
                />
                <div className='blog_container_main'>
                    <HeaderWrapper 
                        HeaderWrapperTitle="At SquareUp"
                        HeaderWrapperDescription="We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success."
                        HeaderWrapperButtonText="Here are ten examples of our notable works:"
                    />
                    <div className='row row_custom'>
                        {BlogPageCartData.map((data)=>{
                            return(
                                <BlogCart 
                                    BlogCartClass='col-lg-6 col-md-6'
                                    key={data.id}
                                    BlogCartHeading={data.BlogCartHeading}
                                    BlogCartImage={data.BlogCartImage}
                                    BlogCartContentHeading={data.BlogCartContentHeading}
                                    BlogCartContentLinkAddress={data.BlogCartContentLinkAddress}
                                    BlogCartContentLinkText={data.BlogCartContentLinkText}
                                    BlogCartDescription={data.BlogCartDescription}
                                />
                            )
                        })}
                    </div>
                </div>
                <DigitalWorldSection />
            </div>
        </div>
    )
}

export default BlogPage
