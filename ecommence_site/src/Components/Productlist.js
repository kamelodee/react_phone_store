import React, { Component } from 'react'
import Title from './Title';
import Product from './Product'
import {ProductConsumer} from '../Context';
export default class Productlist extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='py-5'>
          <div  className='container'>
            <Title name='our' title='products'></Title>
            <div className='row'>
             <ProductConsumer>
              {value=>{
              return value.product.map(products=>{
                return <Product key={products.id} products={products}/>
              })
              
              }}
        
             </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
        //<Product/>
      
    );
  }
}
