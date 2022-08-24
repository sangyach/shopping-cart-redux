import React from 'react'
import tw from "tailwind-styled-components"
import { useSelector, useDispatch} from 'react-redux'
import CartItem from './CartItem'
import {clearCart} from '../features/cart/cartSlice'
import {BiShoppingBag}  from "react-icons/bi";
import { Link } from 'react-router-dom';

const CartContainer = () => {
    const {cartItems, totalPrice} = useSelector( (store) => store.cart)
    const dispatch = useDispatch();
    

    if (totalPrice <1) {
        return (
            <div className='flex flex-col items-center justify-center gap-2 mt-32 text-black'>
                <ShoppingBagIcon/>
                <h1 className=''>Your Cart Is Empty!</h1>
            </div>
        )
    }
  
  return (
    <>
   <CartWrapper>

     <Cart>
        <h1 className='flex justify-center text-2xl mb-10 '>Shopping Cart</h1>
        <Header>
         <span>Item</span>
         <span>ID</span>
         <span>Name</span>
         <span>Price</span>
         <span>Qty</span>
         <span>Remove</span>
      </Header>
         {  
         cartItems.map ( (item) => (
              <CartItem key={item.id} item ={item} />
        ))
      }
      </Cart>

       <OrderSummary>
          <h1 className='font-semibold'> ORDER SUMMARY </h1>
          <span className='text-small'>Total Discount on Price: $ 0 </span>
          <span className='text-small'>Discount Coupon: $ 0 </span>
          <span className='text-small'>Shipping Price: $ 0 </span>
          <span className='text-small'>Order Total: $ {totalPrice.toFixed(2)} </span>
          <CheckoutButton onClick ={() =>{} }>
               PROCEED TO CHECKOUT
          </CheckoutButton> 
          <ClearCartButton onClick ={() =>dispatch(clearCart()) }>
               CLEAR CART
          </ClearCartButton> 
       </OrderSummary>
    
  </CartWrapper>
     <div className='flex my-6 justify-center items-center'>
        <Link to ="/">
          <ContinueShoppingButton >
              CONTINUE SHOPPING
         </ContinueShoppingButton> 
        </Link>
    </div>
  </>
  )
}

export default CartContainer

const CartWrapper = tw.div`
  mt-32 flex gap-4 w-full flex-col sm:flex-row
`;

const Cart = tw.div`
     flex flex-col 
`;
const ClearCartButton = tw.div`
  flex justify-center items-center text-sm text-white
  bg-black h-10 w-52 sm:w-60   cursor-pointer mt-0 
`;

const CheckoutButton = tw(ClearCartButton)``;
const ContinueShoppingButton = tw(ClearCartButton)`
   bg-white border-2 border-black text-black
`;

const Header = tw.div`
  hidden sm:grid grid-cols-4 sm:grid-cols-6 gap-x-0 sm:gap-x-6 px-6 sm:pl-10 gap-y-10 font-semibold mb-4
`;

const ShoppingBagIcon = tw (BiShoppingBag)`
    w-20 h-20
`;

const OrderSummary = tw.div`
  flex flex-col gap-4 gap-x-20  items-center justify-center sm:items-start
`;
