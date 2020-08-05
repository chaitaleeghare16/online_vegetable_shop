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
        this.calculatTotalAmount()

        window.location.reload()

        
        
}

calculatTotalAmount()
{
    var sum=0
    var cart_items=JSON.parse(localStorage.getItem('cart'))
    cart_items.map((items,index)=>{
                sum += items.count*items.price

    })
    localStorage.setItem('total',JSON.stringify(sum))
 
}

placeOrder()
{

    
    var cart_items=JSON.parse(localStorage.getItem('cart'))
    var order= JSON.parse(localStorage.getItem('order')) 
    
        if(order==null)
     {

        localStorage.setItem('order',JSON.stringify(cart_items))
       
    }
    else
    {
        //we need to pass cart items as object instead of array so spreading array with spread operator
        order.push(...cart_items)
        localStorage.setItem('order',JSON.stringify(order))
    }

    // once the order is placed we need to remove items from the cart 
    // below code will handle the situation by replacing the content with empty values 
    var temp=[]
    var sum=0
    localStorage.setItem('cart',JSON.stringify(temp))
    localStorage.setItem('total',JSON.stringify(sum))
    

   
       


    alert('order placed')
}

     
  
    render() {
      
        var sum =JSON.parse(localStorage.getItem('total'))  || 0
        var cart_items=JSON.parse(localStorage.getItem('cart'))
        if(cart_items==null)
        {
            alert('cart is empty')
        }
        this.calculatTotalAmount()
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
                
               <div className="list pl0 mt0 measure center">Total Amount : {sum} </div>
               <div style={{marginLeft:'740px'}}><button className='btn btn-danger' style={{width:'110px'}}  onClick={()=>this.placeOrder()}>Place Order</button></div> 
                    
                   
        
                 
             
            </div>
        )
    }
}

export default ProductDisplayintoCart
