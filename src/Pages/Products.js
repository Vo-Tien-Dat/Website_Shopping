
import axios from 'axios';
import {useState, useEffect } from 'react';
import Product from '../Components/Product';
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import './Products.scss';

function Products(){
    const [data, setData] = useState(undefined);
  useEffect(() =>{  
    axios.get('https://fakestoreapi.com/products').then(res => {
      if(res.data != undefined){
        setData(res.data);
      }
    })
    .catch(error => console.log(error));
  },[]);
  return(
    <div className = "container-fluid Products">
      <div className = "container-sm w-75 ">
        <div className = "row">
          {
              data!=undefined ? data.map((product) => {
                return(
                  <Product key = {product.id}  product = {product}/>
                )
              }):
              (
                <div class="text-center">
                  <div class="spinner-border" role="status"/>
                </div>
              )
            }
        </div>
      </div>
    </div>
    
  )
}

export default Products;