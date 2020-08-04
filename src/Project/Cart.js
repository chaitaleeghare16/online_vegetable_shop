

import React, { Component } from 'react'
import { ProductDisplayintoCart } from './ProductDisplayintoCart'

 class Cart extends React.Component{

render() {
    const {cart} = this.props
return (
    <div>
        
                   
       {
          <ProductDisplayintoCart  cart={cart}/>
               

               
          })
       
        
   



</div>

)
}
}


export default Cart

 