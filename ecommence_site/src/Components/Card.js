import React, { Component } from 'react'
import Title from './Title'
import CartColumns from '../Components/Cart/CartColumns'
import EmptyCart from '../Components/Cart/EmptyCart'
import {ProductConsumer} from '../Context'
import CartList from '../Components/Cart/CartList'
import CartTotals from '../Components/Cart/CartTotals'
export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value=>{
            const {cart} = value;
            if(cart.length>0){
              return(
               <React.Fragment>
                  <Title name="your" title="cart"/>
                <CartColumns/>
                <CartList value={value}/>
                <CartTotals value={value}/>
               </React.Fragment>
              )
            }else{
              return(
                <EmptyCart/>
              )
            }
          }}
        </ProductConsumer>
      </section>
    )
  }
}
