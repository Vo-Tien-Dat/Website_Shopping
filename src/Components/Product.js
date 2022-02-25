import React from "react";
import './Product.scss';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
function Product(props){
    const {id,image, price, title} = props.product;
    return(
        <React.Fragment>
            <Link to = {`${id}`} className = "col-3 px-0 linkproduct">
                <div className = "product">
                    <img className = "image-product" src = {image}/>
                    <div className = "container price">{price}</div>
                    <div className  ="container title">{title}</div>   
                </div>
            </Link>
        </React.Fragment>
    )
}


export default Product;