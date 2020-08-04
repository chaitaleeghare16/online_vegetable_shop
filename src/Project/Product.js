




import React from 'react'

import Button from 'react-bootstrap/Button'
import  styles from './Styles/Product.css'

 const Product=({id,name,img,price,stock,addfun})=> {  //add to cart
    console.log({img})
    return (
        <div>
            <article className='mw5 center  bg-white br3 pa3 pa4-na mv3 ba--black-10 ' key={id}>

                <div className='to'>
               
               <img src={img} alt="image"/> 
               
               <h5 className ='f3 mb2'>{name} </h5>
               <h5 className ='f3 mb2'>price:{price} </h5> 
                
               <h5 className ='f3 mb2'>{stock}  </h5> 
              <button variant='danger' className='btn' onClick={()=>addfun({id,name,img,price,stock,units:1})}>ADD To Cart</button>
                </div>
            </article>
        </div>
    )
}

 
 export default Product
 