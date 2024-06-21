import React from 'react'
import Button from '../components/Button'
import {arrowRight} from '../assets/icons'
import {shoes,statistics} from '../constants'
import {bigShoe1} from '../assets/images'
import shoeCard from '../components/shoeCard'

export const Hero = () => {
  return (
    <section id="home" className="w-full flex 
    xl:flex-row flex-col justify-center min-h-screen
    gap-10 max-container">

    <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl: padding-x pt-28">
      <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
      <h1 className="mt-10 font-palanquin text-8xl
      max-sm:text-[72px] max-sm:leading-[82]
      font-bold">
        <span className="xl:bg-white xl:whitespace-nowrap 
        relative z-10 pr-10">The New Arrival</span>
        <br/>
        <span className="text-coral-red inline-block mt-3">Nike</span>
        Shoes
      </h1>
      <p className="font-montserrat text-slate-gray text-lg 
      leading-8 mt-6 mb-14 
      sm:max-w-sm">
        Discover Stylish Nike Arrivals, quality comfort and innovation for your active life.
      </p>

        <Button label="Show now"
          iconURL={arrowRight}
          />
        <div className="flex justify-starts item-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index)=>(       /*you can remove index if you want since we are using Label here*/
            <div key={stat.label}>               {/*we are using label as key because its unique in our case or else use index*/}
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
              </div>
          ))}
        {/* //  This is some another level component for reusing the Button component in 'component' folder */}
    </div>
  </div>


  {/*Right part of the Hero section AKA changing of shoe images starts here*/}
  <div className="relative flex-1 
  flex justify-center items-center border-2
  xl:min-h-screen
  max-xl:py-40 bg-primary bg-hero
  bg-cover bg-center">
    <img 
        src={bigShoe1}
        alt="Shoe Collections"
        width={610} height={500}
        className="object-contain relative z-10"
    />
  </div>

  <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%]">
    {shoes.map((shoe)=>(
      <div key={shoe}> {/*This div can have the key as Shoe itself thats how he did*/}
        <shoeCard 
          imgURL={shoe}
          changeBigShoeImage=
          {()=>{}}
          bigShoeImage=""
        />
      </div>
    ))}
  </div>
    </section>
  )
}

export default Hero;