import React from 'react'
import tw from "tailwind-styled-components"
import { Link } from 'react-router-dom';
import Product from './products/Product';
import curatedProducts from '../data/curatedProducts';

const Home = () => {
  return (
    <HomeWrapper>
        <HeroBannerContainer>
        <img src="/images/home/hero-image.jpg"/>
      </HeroBannerContainer>
      <Promotion>
             <p className='text-3xl sm:text-7xl font-semibold'>SALE</p>
             <p className='text-sm sm:text-3xl'>15 to 30 JULY </p>
             <p className='text-small sm:text-5xl'>UP TO 40% OFF </p>
             <p className='text-small sm:text-5xl'>EVERYTHING </p>
      </Promotion>
      
      <h1 className='flex pl-4 sm:pl-10 font-normal text-xl sm:text-2xl mt-6 sm:mt-8 mb-0 sm:mb-0'>Curated Products</h1>

      <ProductsGrid >
       {
         curatedProducts.map( (product) => (
            <Product key={product.id} product = {product}/> 
         ))      
       }
     </ProductsGrid>

      <h1 className='flex pl-4 sm:pl-10 font-normal text-xl sm:text-2xl mt-6 sm:mt-8 mb-0 sm:mb-0'>Shop By Category</h1>

      <CuratedPicks>
        <div>
        <Link to= "/watches">
          <div  className='relative'>
          <img src="/images/home/watches_promo_home.jpg" className='brightness-50'/>
          <WatchesPromotion>
             <p className='text-2xl sm:text-4xl font-semibold mb-2'>FASHION WATCHES</p>
             <p className='text-lg sm:text-2xl'>END OF SEASON SALE </p>
             <p className='text-lg sm:text-4xl'>UP TO 40% OFF </p>
             <ShopButton>SHOP NOW</ShopButton>
         </WatchesPromotion>
         </div> 
         </Link>
         </div>
         
         <div className='relative'>
         <Link to= "/sneakers">
         <div> 
          <img src="/images/home/sneakers_promo_home.jpg" className='brightness-50'/>
          <ShoesPromotion>
            <p className='text-2xl sm:text-4xl font-semibold mb-2'>SPORTY SHOES</p>
             <p className='text-lg sm:text-2xl'>END OF SEASON SALE </p>
             <p className='text-lg sm:text-4xl'>UP TO 40% OFF </p>
             <ShopButton>SHOP NOW</ShopButton>
         </ShoesPromotion>
         </div>
         </Link>
         </div>
      </CuratedPicks>
    </HomeWrapper>
    
  )
}

export default Home

const HomeWrapper = tw.div`
  flex flex-col
`;


const HeroBannerContainer = tw.div`
flex items-center justify-center mt-20 brightness-50
`;

const Promotion = tw.div`
  absolute top-20 left-6 sm:top-52 sm:left-24 flex flex-col gap-1 sm:gap-2 z-1 text-white
`;

const ProductsGrid = tw.div`
  mt-4 sm:mt-8
  flex items-center justify-center px-8 grid grid-cols-1 gap-2 sm:gap-6 
  xl:grid-cols-5 lg:grid-cols-4
`;

const ShopButton = tw.div`
  flex justify-center items-center text-lg text-white
  bg-black h-12 w-52 sm:w-60 cursor-pointer mt-1 sm:mt-6
`;

const CuratedPicks = tw.div`
  mt-4 sm:mt-8 mb-20 flex flex-col sm:flex-row gap-10 items-center justify-center brightness-100  px-4 sm:px-10 
`;

const WatchesPromotion = tw.div`
  absolute top-4  left-8 sm:top-12 sm:left-16 flex flex-col gap-1 sm:gap-2 z-1 text-white 
`;

const ShoesPromotion = tw(WatchesPromotion)``;