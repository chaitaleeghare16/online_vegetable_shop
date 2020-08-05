import React, { Component } from 'react'





export class ProductDisplayintoCart extends Component {
    
    updateCount=(count,id,index)=>
    {
        
        var cart_items=JSON.parse(localStorage.getItem('cart'));
        for(let i=0;i<cart_items.length;i++)
        {
            if(id === cart_items[i].id)
            {
                cart_items[i].count+=1
                break;
            }
        }

        localStorage.setItem('cart',JSON.stringify(cart_items))

        window.location.reload()

        
        
}

     
  
    render() {
      
        var cart_items=JSON.parse(localStorage.getItem('cart'))
        if(cart_items==null)
        {
            alert('cart is empty')
        }
        return (
            <div>
                {
                cart_items.map((items,index)=>(
                <ul className="list pl0 mt0 measure center" key={items.id} >        
                <li
                  className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
                    <img className="w2 h2 w3-ns h3-ns br-100" src={items.img} />
                    <div className="pl3 flex-auto">
                        <span className="f6 db black-70">{items.name} </span>
                        <span className="f6 db black-70">price :{items.price}/{items.unit} </span>
                        
                      
                      <span style={{marginLeft:'200px'}}>count  <button onClick={()=>this.updateCount(items.count,items.id,index)}>+</button>&nbsp; 
                         {items.count}&nbsp;
                        
                         <button>-</button>&nbsp;
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
