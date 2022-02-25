
import {memo} from 'react';
import { BrowserRouter as Router, Route, NavLink, Link, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingBag } from "@fortawesome/free-solid-svg-icons";
function Header(){
    return(
        <>
            <ul class="nav d-flex">
                <li class="nav-item">
                    <Link to = "/" className = "nav-link">Home</Link>
                </li>
                <li class="nav-item">
                    <Link to = "/product" className = "nav-link">Product</Link>
                </li>
                <li class="nav-item">
                    <Link to = "/contact" className = "nav-link">Contact</Link>
                </li>
                <li class="nav-item mt-1 float-left">
                    <Link to = "/shopping-cart">
                        <FontAwesomeIcon icon={faShoppingBag} className = "fa-xl"/>
                    </Link>
                </li>
            </ul>
        </>
        
    )
}


export default memo(Header);