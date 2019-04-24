import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Logo from '../logo.svg'
import Styled from 'styled-components'
import {ButtonContainer} from './Button'
export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
      {/*my icon */}
       <Link to='/' className='navbar-brand'>
       <img src={Logo} alt='njkhjhuioyuy'/>
       kamedialinks
       </Link>
       <ul className='navbar-nav align-items-center mx-auto'>
       <li className='nav-item ml-5'>
       <Link to='/' className='nav-link'>
       products
       </Link>
       </li>
       
       </ul>
       <Link to='/card' className='ml-auto'>
       <ButtonContainer>
         <span className='mr-2'><i className='fas fa-cart-plus'/>
         </span>
       my card
       </ButtonContainer>
       </Link>
      </NavWrapper>
    )
  }
};

const NavWrapper=Styled.nav`
background:var(--mainblue);
.nav-link{
  color:var(--mainwhite)!important;
  font-size:1.3rem;
  text-transform:capitalize;
  border-bottom:5px solid blue;
}
`