import React from 'react'
import tw from "tailwind-styled-components"
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight}  from "react-icons/md";
import {ImBin} from "react-icons/im";
import { removeItem, incrementItem, decrementItem } from '../features/cart/cartSlice';
import { useDispatch} from 'react-redux'

const CartItem = ({item}) => {
  const dispatch = useDispatch();

  return (
  
      <CartItemContainer className='flex flex-col'>
          <CartBox>
              <div><img src= {item.image}  width={50} height={50}/></div>
              <div >{item.id} </div>
              <div>
                <span>{item.title}</span>
              </div>
              <div>
                <span>{item.price}</span>
              </div>   
              <div className='flex gap-2'>
                <QtyDecrementIcon onClick={()=> dispatch(decrementItem(item.id))}/>
                <span>{item.qty}</span>
                <QtyIncrementIcon  onClick={()=> dispatch(incrementItem(item.id))}/>
              </div>  
              <div><RemoveIcon onClick={()=> dispatch(removeItem(item.id))}/></div>
          </CartBox>
          <hr className='text-black py-2'/> 
    </CartItemContainer>
   
  )
}

export default CartItem

const CartItemContainer = tw.div`
flex flex-col
`;


const CartBox = tw.div`
  grid grid-cols-3 sm:grid-cols-6 gap-x-0 sm:gap-x-6 px-4  sm:pl-10 gap-y-10 font-semibold mb-4
`;

const QtyDecrementIcon = tw (MdOutlineKeyboardArrowLeft)`
    w-5 h-5  cursor-pointer
`;
const QtyIncrementIcon = tw (MdOutlineKeyboardArrowRight)`
    w-5 h-5  cursor-pointer
`;  

const RemoveIcon = tw (ImBin)`
    w-4 h-4 cursor-pointer
`;