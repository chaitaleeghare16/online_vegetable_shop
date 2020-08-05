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


        calculatTotalAmount()
{
    var sum=0
    var cart_items=JSON.parse(localStorage.getItem('cart'))
    cart_items.map((items,index)=>{
                sum += items.count*items.price
    })
    localStorage.setItem('total',JSON.stringify(sum))
 
}
        
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
            // arr1.push(obj)
            flag = 0 
        }
            
        else
        {
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
    }
       if(flag === 0)
       {
         
           var cart_data=JSON.parse(localStorage.getItem('cart'))
           if(cart_data==null)
            {
            cart_data=[]
            }
            obj.count+=1
            cart_data.push(obj)
            localStorage.setItem('cart',JSON.stringify(cart_data))
            alert('added into cart')
       }

       if(flag==1)
       {
            alert('already into cart..go to cart')
           
        
       }

       this.calculatTotalAmount()
       
    }

    
   
        
        

// intialize cart and product variable 
   componentDidMount()
   {
    var arr =JSON.parse(localStorage.getItem('product')) 
    var total = JSON.parse(localStorage.getItem('total')) || 0
       
    if(arr==null)
    {
        arr=[]
      products.map((items)=>{

       
            arr.push(items)
           
           localStorage.setItem('product',JSON.stringify(arr))
        })
    }
    
        localStorage.setItem('total',JSON.stringify(total))
        
    
}
    
    


      
    render() {
        var a =JSON.parse(localStorage.getItem('cart'))
        if(a==null)
        {
            a=[]
           

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

