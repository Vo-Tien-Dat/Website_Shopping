


import {useDispatch, useSelector} from 'react-redux';

import {Link} from 'react-router-dom';

import indexAction from '../States/Actions/indexActions';
import deleteProduct from '../States/Actions/delete';
import { useEffect } from 'react';
function ProductCart(){
    const listProduct = useSelector((state) => state.reducer);
    const dispatch = useDispatch();
    const deleteProducts = (index) =>{
        dispatch(deleteProduct({index: index}));
    }

    console.log(listProduct);
    var sumPrices = listProduct.reduce(
        (sum, product) =>   sum + product.payload.price
    ,0);

    return(
        <>
            <div>{sumPrices}</div>
            <div className = "container">
                <ul class="list-group">
                    {
                        listProduct.map((product,index) => {
                            return(
                                <div key = {index}>
                                        <Link to = {`/product/${product.payload.id}`} className="list-group-item">
                                            <div className = "">{product.payload.title}</div>
                                            <div className = "">{product.payload.price}</div>
                                            
                                        </Link>
                                        <button onClick = {() => deleteProducts(index)}> xoa san pham </button>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
    
}

export default ProductCart;