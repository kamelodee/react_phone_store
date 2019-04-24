import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data'
const ProductContext = React.createContext();
//provider
//cunsumer
 class ProductProvider extends Component {
     state={
          product:[],
          detailProduct:detailProduct,
          cart:[],
          modalOpen :false,
          modalProduct:detailProduct,
          cartSubTotal:0,
         cartTax:0,
         cartTotal:0
     }
 
   
  componentDidMount(){
    this.setProducts();
    
  }
  
  setProducts=()=>{
    let tempProduct = [];
    storeProducts.forEach(item=>{
      const singleItem = {...item};
      tempProduct = [...tempProduct,singleItem];
    })
    this.setState(()=>{
      return {product:tempProduct}
    })
  }

  getItem= (id) => {
    const products = this.state.product.find(item => item.id === id);
    return products; 
  }
     handleDetail=(id)=>{
       const products = this.getItem(id);
       this.setState(()=>{
         return {detailProduct:products}
       })
     }

     addToCart=(id)=>{
        let temProduct = [...this.state.product];
        const index = temProduct.indexOf(this.getItem(id));
        const products = temProduct[index];
        products.inCart = true;
        products.count = 1;
        const price = products.price;
        products.total = price;
this.setState(()=>{
  return {product:temProduct,cart:[...this.state.cart,products]}
},
()=>{
  this.addTotals();
})
    };
    openModal = id =>{
      const products = this.getItem(id);
      this.setState(()=>{
        return {modalProduct:products,modalOpen:true}
      })
    }
    closeModal=()=>{
      this.setState(()=>{
        return {modalOpen:false}
      })
    }
    increment=(id)=>{
let temcart = [...this.state.cart];
const seletedProduct = temcart.find(item=>item.id===id);
const index  =  temcart.indexOf(seletedProduct);
const product = temcart[index];
product.count = product.count +1;
product.total = product.count * product.price;
this.setState(()=>{return{cart:[...temcart]}},
()=>{this.addTotals()}
)
    }

    decrement=(id)=>{
     
let temcart = [...this.state.cart];
const seletedProduct = temcart.find(item=>item.id===id);
const index  =  temcart.indexOf(seletedProduct);
const product = temcart[index];
product.count = product.count -1;
if(product.count===0){
  this.removeItem(id)
}else{product.total = product.count * product.price
  this.setState(()=>{return{cart:[...temcart]}},
  ()=>{this.addTotals()}
  )
}

    }
    removeItem=id=>{
    let temProducts = [...this.state.product];
    let temcart = [...this.state.cart];
    temcart = temcart.filter(item=>item.id !==id);
    const index = temProducts.indexOf(this.getItem(id));
    let removeProduct = temProducts[index];
    removeProduct.inCart = false;
    removeProduct.count = 0;
    removeProduct.total = 0;
    this.setState(()=>{
      return{
        cart:[...temcart],
        product:[...temProducts]
      }
    },
    ()=>{
      this.addTotals();
    })

    }

    clearCart=()=>{
        this.setState(()=>{
          return{cart:[]}
        },()=>{
          this.setProducts();
          this.addTotals();
        })
    }

    addTotals= ()=>{
      let subTotal= 0;
      this.state.cart.map(item=>(subTotal += item.total));
      const temTax = subTotal * 0.1;
      const tax = parseFloat(temTax.toFixed(2));
      const total = subTotal + tax;
      this.setState(()=>{
        return {
          cartSubTotal:subTotal,
          cartTax:tax,
          cartTotal:total
        }
      })
    }
  render(){
    return (
    <ProductContext.Provider value={{
        ...this.state,
        handleDetail:this.handleDetail,
        addToCart:this.addToCart ,
        openModal:this.openModal,
        closeModal:this.closeModal,
        increment:this.increment,
        decrement:this.decrement,
        removeItem:this.removeItem,
        clearCart:this.clearCart
        }}>
    {this.props.children}
    </ProductContext.Provider>
    )
}}
const ProductConsumer = ProductContext.Consumer;
export {ProductProvider,ProductConsumer};
