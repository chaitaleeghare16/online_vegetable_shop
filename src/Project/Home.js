import React, { Component } from 'react'
import Cart from './Cart';


import { Link } from 'react-router-dom';



const products =
[
    {
    
        id:1,
        name:'Tomato',
        img :'tomato.jpeg',
        price:19,
        unit:'kg',
        stock:'In Stock',
        count:0
      
    },
    {
    
        id:2,
        name:'Onion',
        img :'onion.jpeg', 
        price:40,
        unit:'kg', 
        stock:'In Stock',
        count:0
     
    },
    {
    
        id:3,
        name:'Potato',
        img :'potato.jpeg',
        price:60, 
        unit:'kg',
        stock:'In Stock',
        count:0
       
     
    },
       
    {
     id:4,
    name:'Ginger',
    img :'ginger.jpeg',
    price:30,
    unit:'gm', 
    stock:'In Stock',
    count:0
    }


    
    ]

    export class Home extends Component {
        
    handleAddData=(product)=>
    {
       console.log(product)
      const id= product.id
      const name = product.name
      const img=product.img
      const price=product.price
      const unit=product.unit
      const count=product.count

      var obj ={id,name,img,price,unit,count}
       
        
         
        

        var flag=0;
        var matchId=0;
        var i=0

        var arr1=JSON.parse(localStorage.getItem('cart'))
        if(arr1 == null)

        {
            arr1.push(obj)
        }
            
        arr1.map((item,index)=>
         {
           
           if(id === item.id && name===(item.name))
           {

               console.log(id +''+item.id)
              flag=1;
              matchId=item.id;
              i=index;

             
           }
           
           
      })
       if(flag === 0)
       {
           alert('added into cart')
         
           var cart_data=JSON.parse(localStorage.getItem('cart'))
           if(cart_data==null)
            {
            cart_data=[]
            }
            cart_data.push(obj)
            localStorage.setItem('cart',JSON.stringify(cart_data))
        
       }

       if(flag==1)
       {
            alert('already into cart..go to cart')
           arr1[i].count+=1;
        
       }

    }

    
   
        
        


   componentDidMount()
   {
    var arr =JSON.parse(localStorage.getItem('product')) 
    var cart_arr = JSON.parse(localStorage.getItem('cart')) 
       
    if(arr==null)
    {
        arr=[]
      products.map((items)=>{

       
            arr.push(items)
           
           localStorage.setItem('product',JSON.stringify(arr))
        })
    }
    if(cart_arr==null)
    {
        cart_arr=[]
        this.state.cart.map((items)=>{
            cart_arr.push(items)
            localStorage.setItem('cart',JSON.stringify(cart_arr))
        })
    }

}
    
    


      
    render() {
        var a =JSON.parse(localStorage.getItem('cart'))
        if(a==null)
        {
            a=[]
            localStorage.setItem('cart',JSON.stringify(a))

        }
       
        return (
            <div>
                 
               
                  { 
                 
                    
                    JSON.parse(localStorage.getItem('product')) .map((items,index)=>

                    
                    <ul class="list pl0 mt0 measure center">
                    <li
                        class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
                        <img class="w3 h3 w4-ns h4-ns br-100" src={items.img} />
                        <div class="pl3 flex-auto">
                            <span class="f6 db black-70">{items.name}</span>
                            <span class="f6 db black-90"><strong>Price :</strong>{items.price}/{items.unit}</span>
                            <span class="f6 db black-70">{items.stock}</span>
                           
                           
                         
                            <button className='btn btn-danger' value={index} onClick={()=>this.handleAddData(items)}>ADD to cart</button> 
                          
                        </div>
                    
                    </li>
    
            </ul>)
    
                  }
                   
                   
    
            
                
                
            

            </div>
        )
    }
}


export default Home

