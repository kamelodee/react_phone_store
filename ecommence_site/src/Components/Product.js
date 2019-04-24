import React, { Component } from 'react'
import style from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../Context'
export default class Product extends Component {
  render() {
    const {id, title, img, price, inCart} = this.props.products
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
         <div className="cart">

         <ProductConsumer>
           {value=>(
                 <div className="img-container p-5" onClick={()=>
                 value.handleDetail(id)}>
                 <Link to="/details">
                 <img src={img} alt="product" className="card-img-top"/>
                 </Link>
                 <button className="cart-btn" disabled={inCart ? true : false} onClick={
                   ()=>{
                     value.addToCart(id);
                     value.openModal(id);
                   }
                 }>
                 {inCart?(<p className="text-capitalize mb-0"  disabled>
                 {""}
                 in cart</p>):(<i className="fas fa-cart-plus"></i>)}
                 </button>
                </div>
           )}
        
         </ProductConsumer>

         {/* cart foooter*/}
         <div className="cart-footer d-flex justify-content-between">
         <p className="align-self-center mb-0">{title}</p>
         <h5 className="text-blue font-italic mb-0">
         <span className="mr-1">${price}</span>
         </h5>
         </div>
         </div>
      </ProductWrapper>


    )
  }
}

const ProductWrapper = style.div`

.cart{
  border-color:transparent;
  transition:all 1s linear;

}
.cart-footer{
  background:transparent;
  border-top:transparent;
  transition:all 1s linear;
}
&:hover{
  .cart{
    border:0.04rem solid rgba(0,0,0,0.2);
    box-shadow:2px 2px 2px 0px rgba(0,0,0,0.2)
  }
  .cart-footer{
    background:rgba(247,247,247);
  }
}
.img-container{
  position:relative;
  overflow:hidden;

}
.card-img-top{
 
  transition:all 1s ease;
}
.img-container:hover .card-img-top{
  transform:scale(1.2);
}
.cart-btn{
  position:absolute;
  bottom:0;
  right:0;
  padding:0.2rem 0.4rem;
  background:var(--lightblue);
  color:var(--mainwhite);
  font-size:1.2rem;
  border-radius:0.5rem 0 0 0;
  transform:translate(100%,100%);
  transition:all 1s ease;
}
.img-container:hover .cart-btn{
  transform:translate(0,0);
}
.cart-btn:hover{
  color:var(--mainblue);
  curser:pointer;
}
`;
