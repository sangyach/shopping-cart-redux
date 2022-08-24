import React from 'react'
import tw from "tailwind-styled-components"
import Product from './Product'
import watches from '../../data/watches'

const Watches = () => {
  return (
    <WatchesContainer>
      <HeroBannerContainer>
        <img src="/images/watches/hero_img.jpg"/>
      </HeroBannerContainer>
      <h1 className='flex pl-8  font-normal text-xl mt-28 sm:mt-10 mb-2 sm:mb-6'>Watches</h1>
      <Promotion>
             <p className='text-4xl sm:text-7xl font-semibold'>SALE</p>
             <p className='text-xl sm:text-3xl'>15 to 30 JULY </p>
             <p className='text-xl sm:text-3xl'>LUXURY WATCHES </p>
             <p className='text-2xl sm:text-5xl'>UP TO 35% OFF </p>
             <ShopButton>SHOP NOW</ShopButton>
      </Promotion>
         <ProductsGrid >
       
       {
         watches.map( (product) => (
            <Product key={product.id} product = {product}/> 
         ))      
       }
     </ProductsGrid>
    </WatchesContainer>
  )
}

export default Watches

const WatchesContainer = tw.div` 
  mt-0 w-full h-full mb-20 
`;
const HeroBannerContainer = tw.div`
  hidden sm:flex items-center justify-end mt-28 brightness-100 sm:pr-40
`;

const ProductsGrid = tw.div`
  flex items-center justify-center px-8 grid grid-cols-1 gap-2 sm:gap-6 
  xl:grid-cols-5 lg:grid-cols-4
`;
const Promotion = tw.div`
  hidden absolute sm:top-36 sm:left-24 sm:flex flex-col gap-2 z-1 text-black
`;
const ShopButton = tw.div`
  flex justify-center items-center text-lg text-white
  bg-black h-12 w-52 sm:w-80 cursor-pointer mt-0 sm:mt-6
`;

