import React, {useState} from 'react'
import tw from "tailwind-styled-components"
import {AiOutlineMenu, AiOutlineClose}  from "react-icons/ai";
import {BsCart2} from "react-icons/bs";
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'

const NavBar = () => {
    const [closeButtonOpen, setCloseButtonOpen] = useState(false);
    const {amount, totalQuantities} = useSelector( (store) => store.cart)

  return (
    <MenuContainer>
    <a href ="/">
        <Logo>Shopping Cart Redux</Logo>
    </a>  
    <MenuCenter> 
        <Link to = "/">Home</Link>
        <Link to= "/men">Men</Link>
        <Link to= "/women">Women</Link>
        <Link to= "/sneakers">Sneakers</Link>
        <Link to= "/watches">Watches</Link>
        <Link to= "/blog">Blog</Link>
        <Link to= "/careers">Careers</Link>
    </MenuCenter>
    
    <div className='flex gap-6 items-center justify-center'>
    <Link to = { '/cartcontainer'} >
      <CartIcon/>
     </Link>
    <CartItemsCircle>
          <span className='text-sm'> {totalQuantities} </span>
        </CartItemsCircle>
    <Link to = "#" onClick={() => setCloseButtonOpen(true)}>
            <HamburgerMenu/>
    </Link>
    </div>

    
    <SidebarMenu className = {closeButtonOpen === true ? 'scale-100 opacity-90' : 'scale-0'}>

          <CloseButtonWrapper >
              <span className='text-lg mt-4 cursor-pointer' 
              onClick={() => setCloseButtonOpen(false)}><CloseButton/></span>
          </CloseButtonWrapper>
          
          <Link to = "/" onClick={() => setCloseButtonOpen(false)}>Home</Link>
            <Link to = "/men" onClick={() => setCloseButtonOpen(false)}>Men</Link>
            <Link to = "/women" onClick={() => setCloseButtonOpen(false)}>Women</Link>
            <Link to = "/sneakers" onClick={() => setCloseButtonOpen(false)}>Sneakers</Link>
            <Link to= "/watches" onClick={() => setCloseButtonOpen(false)}>Watches</Link>
            <Link to= "#" onClick={() => setCloseButtonOpen(false)}>Blog</Link>
            <Link to= "#" onClick={() => setCloseButtonOpen(false)}>Careers</Link>
          
        </SidebarMenu>
   </MenuContainer> 
  )
}

export default NavBar

const MenuContainer = tw.div`
  flex items-center justify-between fixed top-0 left-0 right-0 
  pl-4 pr-8 sm:pr-4  py-0 h-20 z-10 bg-black text-white
`;
const Logo = tw.span`
  text-small text-white cursor-pointer
`;
const MenuCenter = tw.div`
  flex items-center justify-between gap-10 text-sm
  a {
    font-normal
  }
  @media (max-width: 768px) {
    hidden sm:flex
    }
`;  

const HamburgerMenu = tw(AiOutlineMenu)`
  w-8 h-8 cursor-pointer pt-0 
`;

const CloseButton = tw(AiOutlineClose)`
    w-8 h-8 cursor-pointer pt-0 
`;

const CartIcon = tw(BsCart2)`
    w-6 h-6 cursor-pointer pt-0 
`;

const SidebarMenu = tw.div`
  fixed top-0 bottom-0 right-0 pt-0  list-none bg-black text-white w-60 z-10
  flex flex-col text-start pl-10 gap-2  text-sm origin-left ease-out
`;

const CloseButtonWrapper = tw.div`
  flex flex-row-reverse item-center justify-items-end; mt-14 p-3 pr-8
`;

const CartItemsCircle = tw.div`
  bg-white text-black absolute top-5 right-20  sm:right-16 w-5 h-5 rounded-full 
  flex item-center justify-center
`;