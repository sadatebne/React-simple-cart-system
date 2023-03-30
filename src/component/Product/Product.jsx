import React from 'react';
import './Product.css'
//font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const { img, name, price, seller, quantity, ratings } = props.value
      
    const btnHandler=props.btnHandler
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <h4>{price}</h4>
                <p>Manufacturer :{seller}</p>
                <p>Rating:{ratings}</p>
            </div>
            <button onClick={()=>btnHandler(props.value)} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
    );
};

export default Product;