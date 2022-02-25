import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import './InforProduct.scss';
import axios from "axios";
import './Products.scss';


import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from "redux"
import indexAction from "../States/Actions/indexActions";

function InforProduct(){
    const {id} = useParams();
    const [data, setData]  = useState(undefined);
    const [product, setProduct] = useState([]);

    const products = useSelector((state) => state.reducer);
    const dispatch = useDispatch();

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res => {
            if(res.data != undefined){
                setData(res.data);
            }
        })
        .catch(err => console.log(err));
    },[]);

    const addProduct = () => {
        dispatch(indexAction({
            title: data.title,
            price: data.price,
            id: data.id
        }))
    }


    if(data != undefined){
        return(
            <div className = "container-fluid Products">
                <div className = "container d-flex w-100 Information-Product">
                    <div className = "row h-100 w-100">
                        <div className = "col-4 h-100">
                            <img src = {data.image} className = "w-100 h-100 Image-Product"/>
                        </div>
                        <div className = "col-8 h-100 px-5 py-5">
                            <div className = "display-4 font-weight-bold h-25 Title-Product">{data.title}</div>
                            <div className="font-weight-bold h-25 Price-Product">
                                <div className= "display-4">{`${data.price}$`}</div>
                                <div className = "d-flex">
                                        <div className = "row w-100">
                                            <div className = "col-6">
                                                <div className = "w-100 rating">{`rating: ${data.rating.rate}`}</div>
                                            </div>
                                            <div className = "col-6">
                                                <div className = "w-100 buy">{`buy: ${data.rating.count}`}</div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                                <div className = "h-25 Description-Product">{data.description}</div>
                                <div className = "d-flex mx-5 my-5">
                                    <div className = "btn btn-danger mx-5">Thêm vào giỏ hàng</div>
                                    <div className = "btn btn-danger" onClick = {addProduct }>Mua hàng</div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            
        )
    }
    else{
        return(
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status"/> 
            </div>
        )
    }
    
}



export default InforProduct;