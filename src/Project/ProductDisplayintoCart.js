import React, { Component } from 'react'





export class ProductDisplayintoCart extends Component {
    render() {
        const {cart} = this.props
        return (
            <div>
                {
                    cart.map((items,index)=>(
                <ul className="list pl0 mt0 measure center" key={index} >        
                <li
                  className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
                    <img className="w2 h2 w3-ns h3-ns br-100" src="onion.jpeg" />
                    <div className="pl3 flex-auto">
                        <span className="f6 db black-70">{items.name} &nbsp;
                       
                      <span style={{marginLeft:'200px'}}>count  <button>+</button>&nbsp; 
                         {items.units}&nbsp;
                         <button>-</button>&nbsp;
                      </span>
                         </span>
                        
                     </div>
                     
               </li>
               </ul>
                    
                    ))}
        
                 
             
            </div>
        )
    }
}

export default ProductDisplayintoCart
