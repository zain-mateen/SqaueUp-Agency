import React from 'react'
import './CareerPage.scss'

function CareerWorkCart(props) {
    return (
        <div className={`col_careerWorkCart_otr ${props.CareerWorkCartClass}`}>
            <div className='col_careerWorkCart_inr'>
                <h4 className='careerWorkCart_heading heading-h4'>{props.CareerWorkCartHeading}</h4>
                <p className='careerWorkCart_desc heading-s'>{props.CareerWorkCartDescription}</p>
            </div>
        </div>
    )
}

export default CareerWorkCart
