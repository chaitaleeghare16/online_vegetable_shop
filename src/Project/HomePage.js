import React, { Component } from 'react'
import Cart from './Cart';
import Product from './Product';


const products = [
    {
    
        id:1,
        name:'onion',
        image:<img src='onion.jpeg' alt="onion"/> ,
        price:19,
        stock:'In Stock',
        units:0
       
        
    
    },
    {
    
        id:2,
        name:'tomato',
        image:<img src='tomato.jpeg'  alt="tomato"/>, 
        price:40, 
        stock:'In Stock',
        units:0
      
        
    },
    {
    
        id:3,
        name:'potato',
        image:<img src='potato.jpeg' alt="potato"/>, 
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
                     
                    name:'onion',           
                    units:1
                     
                 }
             ]
        }
    }

    handleAddData(product)
    {

        // console.log(product)
        //filter method return array
        const already_present_item_in_cart = this.state.cart.filter(cartData=>{ return (cartData.id === product.id)});
        
        
            if(already_present_item_in_cart.length>0)
       {
        const not_present_item_in_cart = this.state.cart.filter(cartData=> { return (cartData.id !== product.id)})

           
        const updatedUnits = {
            ...already_present_item_in_cart[0],units:already_present_item_in_cart[0].units +product.units}
      

               this.setState({
                   cart:[...not_present_item_in_cart,updatedUnits]

               });
        }

           else{
               this.setState({cart:[...this.state.cart,product]});
           }
       }
    
    render() {
        let Username_Of_LoggedIn_User_Is =this.props.match.params.name;
  
        
        return (
            <div>
               
                {
                this.state.cart.map(e => <Cart key={e.name} {...e} /> ) 
                } 
                 {
                  products.map(items=> <Product key={items.id} {...items} addfun={this.handleAddData.bind(this)}/>)
                } 
            </div>
        )
    }
}

export default Home
