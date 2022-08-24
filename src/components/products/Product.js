import React from 'react'
import tw from "tailwind-styled-components"
import { Link } from 'react-router-dom';
import {BsCart2} from "react-icons/bs";
import { addToCart} from '../../features/cart/cartSlice';
import { useDispatch} from 'react-redux'


const Product = ({product}) => {
  const dispatch = useDispatch();
  return (
  
    <ProductContainer>
      
        <ProductDetails>
            <img src={product.image}  />
            <Details>
                <span className='text-sm'>{product.title}</span>
                <span className='text-sm font-semibold'>${product.price}.00</span>
               <div className='flex gap-2'>
                 <CartIcon/>
                 <span className='text-xs cursor-pointer' 
                    onClick={()=> dispatch(addToCart(product))}
                  >ADD TO CART</span>
               </div>
            </Details>
        </ProductDetails>
     
    </ProductContainer>

  )
}

export default Product

const ProductContainer= tw.div`
  flex items-center justify-center my-2 sm:my-0
`;

const ProductDetails = tw.div`
  flex flex-col gap-3 items-center justify-center border-2 pt-20 pb-6
`;

const Details = tw.div`
    flex flex-col gap-1 items-center justify-center mt-2
`;

const CartIcon = tw(BsCart2)`
    w-4 h-4 cursor-pointer
`;
