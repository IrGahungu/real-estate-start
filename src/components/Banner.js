import React from 'react';
import image from '../assets/img/house-banner.jpg';
import Search from '../components/Search';

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-yellow-400'>Need</span> Something, Right?{' '}
            <span className='text-green-600'>We Are Here.</span>
          </h1>
          <p className='max-w-[480px] mb-8'>
            "Experience the power of exceptional real estate services at your fingertips. Our trusted platform connects
            buyers, sellers, and renters, offering a personalized approach to finding your ideal home. With our expert
            guidance and vast listings, embark on a seamless journey towards your next chapter.{' '}
            <span className='text-pink-500 font-semibold'>With Us,</span>{' '}
            <span className='text-violet-600 font-semibold'>Start your journey towards a new chapter today!</span>"
          </p>
        </div>
        {/* Right circular image */}
        <div className='hidden lg:flex justify-center items-center' style={{ flex: '1', maxWidth: '50%' }}>
          <div
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={image}
              alt=''
              style={{
                height: '80%', // Adjust the height to control the visible portion
                width: 'auto',
                objectFit: 'contain',
                borderRadius: '50%', // Make the image circular
              }}
            />
          </div>
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
