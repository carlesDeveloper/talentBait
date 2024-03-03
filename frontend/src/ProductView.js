import React from 'react'
import {Card, CardTitle, CardSubtitle, CardBody, CardText} from "reactstrap"
import "./assets/css/product_card.css"

function ProductView({dataApp ,dataProduct}){
    return(
        <>
            <Card className='card__product'>
                <CardBody>

                    <CardTitle className='title__card'>{dataApp.name}</CardTitle>
                    <CardSubtitle className='subtitle__card'>{dataProduct.productName}</CardSubtitle>
                    <div className='buttons__card'>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </CardBody>
                <img
                    className='card__image'
                    alt="Logo"
                    src={dataProduct.productImage}
                    width="100%"
                />
                <CardBody>
                    <div className='card__content__text'>
                        <div className='content__title'>{dataApp.name}</div>
                        <div className='content__productname'>{dataProduct.productName}</div>
                        <div className='content__description'>{dataProduct.productDescription}</div>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

export default ProductView;