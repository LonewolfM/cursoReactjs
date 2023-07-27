import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
      <Link className='menu-link' to="/carrito">
        <FontAwesomeIcon icon={faShoppingCart} className='cart-icon' />
        <span className='cant_compra '>{cantidadEnCarrito()}</span>
      </Link>
    </div>
  )
}

export default CartWidget;
