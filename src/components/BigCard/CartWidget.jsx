import React from 'react'
import {Link} from 'react-router-dom'
import imgLogo from  '../../images/CarritoIcon.png'
export const CartWidget = (props) => {
    console .log(props)
  return (
    <>
        {/* <Link className="navbar-brand" to="/"> */}
            <img src={imgLogo} height="42" alt="Carrito de Compras" />  
        {/* </Link> */}
    </>
  )
}

// export default CartWidget