import React from 'react'
import tw from "tailwind-styled-components"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <FooterContainer>
        <Logo>Shopping Cart Redux</Logo>
        <Link to = "/">Home</Link>
        <Link to= "/men">Men</Link>
        <Link to= "/women">Women</Link>
        <Link to= "/sneakers">Sneakers</Link>
        <Link to= "/watches">Watches</Link>
        <Link to= "/blog">Blog</Link>
        <Link to= "/careers">Careers</Link>
        <span>© 2022 by CODINGZ2M</span>
   </FooterContainer> 
  )
}

export default Footer


const FooterContainer = tw.div`
  flex flex-col sm:flex-row gap-1 sm:gap-6 items-center justify-center relative bottom-0 left-0 right-0 
  sm:h-20 h-60 z-10 bg-black text-white text-sm
`;
const Logo = tw.span`
  text-small text-white cursor-pointer
`;
