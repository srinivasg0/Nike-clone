import React from 'react'
import { offer } from '../assets/images';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';

export const SpecialOffers = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'> {/*For devices like Mob its gonna appear in reverse in flex-col type.*/}
      <div className='flex-1'>
          <img src={offer} alt="" width={773} height={687} className='object-contain w-full'/>
      </div> {/*FIRST DIV IN THE FLEX*/}
      
      {/*NOW COPY PASTE FROM SUPERQUALITY WHICH ACTS AS SECOND FLEX IN THE RIGHT SIDE*/}
      <div className="flex flex-col flex-1">
            <h2 className="font-palanquin text-4xl capitalize 
                  font-bold lg:max-w-lg">
                  <span className="text-coral-red"> 
                   Special</span>
                  &nbsp; Offer
            </h2>
            <p className="mt-4 lg:max-w-lg info-text "> {/*info text is smtn which we created in index css. It has our deafult styles like text-slate-gray and stuff*/}
            Embark on a shopping journey that redefines your experience 
            with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
            </p>
            <p className="info-text lg:max-w-lg mt-6">
            Navigate a realm of possibilities designed to
             fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
            </p>
            <div className="mt-11 flex flex-wrap gap-4">
              <Button label="Shop now" iconURL={arrowRight}/>
              <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray"
                textColor="text-slate-gray"
              />
            </div>
      </div>

    </section>

  )
}

export default SpecialOffers;