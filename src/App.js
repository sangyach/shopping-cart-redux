import React, {useEffect} from 'react'
import tw from "tailwind-styled-components"
import {Routes,  Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import CartContainer from './components/CartContainer'
import { useSelector, useDispatch} from 'react-redux'
import { calculateTotals } from './features/cart/cartSlice'
import Sneakers from './components/products/Sneakers'
import Watches from './components/products/Watches'
import { Link } from 'react-router-dom';
import Footer from './components/Footer'

const App = () => {

  const {cartItems} = useSelector( (store) => store.cart)
  const dispatch = useDispatch()
  
   useEffect(() => {
    return () => {
      dispatch(calculateTotals());
    };
   }, [cartItems])
    
  return (
    <HomeContainer>
      <NavBar/>
      <Routes>
            <Route  path="/" element={<Home/>} />                
            <Route  path="/cartcontainer" element={<CartContainer/>} />  
            <Route  path="/sneakers" element={<Sneakers/>} />  
            <Route  path="/watches" element={<Watches/>} />  
        </Routes>
        <Footer/>
    </HomeContainer>
    
  )
}

export default App

const HomeContainer = tw.div`
  mt-0 flex flex-col min-h-screen w-screen  box-border  
`;

