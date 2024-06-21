import React from 'react';
import { reviews } from '../constants';
import ReviewCard from '../components/ReviewCard';

const CustomerReviews = () => {
  return (
    <section className='max-container'>
        <h3 className='font-palanquin text-center text-4xl font-bold'>
          What our
          <span className='text-coral-red'> Customers </span>
          Say?
        </h3>
        <p className='info-text m-auto mt-4 max-w-lg'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>

        {/*TO DISPLAY EACH SEPARATE REVIEWS WE USE FLEX BELOW*/}
        <div className='mt-24 flex flex-1 justify-evenly items-center
        max-lg:flex-col gap-14'>
          {reviews.map((review,index)=>(
              <ReviewCard key={index}
                imgURL={review.imgURL}
                customerName={review.customerName}
                rating={review.rating}
                feedback={review.feedback}
              /> //or else just use {...review}
          ))}
        </div>
    </section>

  )
}

export default CustomerReviews