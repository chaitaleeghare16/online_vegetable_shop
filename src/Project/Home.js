import React, { Component } from 'react'
import Cart from './Cart';
import Product from './Product';

import { Link } from 'react-router-dom';


const products = [
    {
    
        id:1,
        name:'tomato',
        img :'tomato.jpeg',
        price:19,
        stock:'In Stock',
        units:0
       
        
    
    },
    {
    
        id:2,
        name:'onion',
        img :'onion.jpeg', 
        price:40, 
        stock:'In Stock',
        units:0
      
        
    },
    {
    
        id:3,
        name:'potato',
        img :'potato.jpeg',
        price:60, 
        stock:'In Stock',
        units:0
        
    }
    
    ]
export class Home extends Component {
    constructor() {
        super()
    
        this.state = {
           
             cart:[
                 {  
                     id:2,
                    name:'onion',           
                    units:1
                     
                 }
             ],
             flag:0
        }
    }

    handleAddData(product)
    {

        //console.log(product)
       // filter method return array
    //     const already_present_item_in_cart = this.state.cart.filter(cartData=>{ return (cartData.id === product.id)});
        
        
    //         if(already_present_item_in_cart.length>0)
    //    {
    //     const not_present_item_in_cart = this.state.cart.filter(cartData=> { return (cartData.id !== product.id)})

           
    //     const updatedUnits = {
    //         ...already_present_item_in_cart[0],units:already_present_item_in_cart[0].units +product.units}
      

    //            this.setState({
    //                cart:[...not_present_item_in_cart,updatedUnits]

    //            });
    //     }

    //        else{
    //            this.setState({cart:[...this.state.cart,product]});
    //        }

       
     
     const id=product.id;
     const name=product.name;
     const units=product.units+1;
     const img=product.img
     console.log(img)

     var obj = {id,name,units,img}
     
     
     var i=0
     

   this.state.cart.map((item,index)=>{



    if(item.id !== product.id)

    {
        console.log(product.id+' '+item.id+' '+index)
       this.setState({cart:[...this.state.cart,product]})
     }

      if(item.id === product.id)
      {
        console.log(product.id+' '+item.id+' '+index)

        //var index = this.state.cart.indexof(item.id==product.id)
        i=index;
        var arr =this.state.cart.splice(i,1,obj)
        this.setState({cart:[arr]})
                   console.log(this.state.cart)
     }
    
   })
  
   // alert(this.state.cart)
           
    
   }

    
    render() {
       
  
        
        return (
            <div>
               
                {
                <Cart cart={this.state.cart}/>  
                } 
                 {
                  products.map(items=> <Product key={items.id} {...items} addfun={({id,name,img,price,stock,units})=>this.handleAddData({id,name,img,price,stock,units:1})}/>)
                } 

            </div>
        )
    }
}

export default Home
