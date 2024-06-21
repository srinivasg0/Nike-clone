import React from 'react'
import Button from '../components/Button';
import { shoe8 } from '../assets/images';


const SuperQuality = () => {
  return (
    <section id="about-us"
    className="flex justify-between items-center max-lg:flex-col 
    gap-10 w-full max-container">
      <div className="flex flex-col flex-1">
            <h2 className="font-palanquin text-4xl capitalize 
                  font-bold lg:max-w-lg">
                  We Provide You 

                  <span className="text-coral-red"> 
                  &nbsp; Super
                  </span><br/>
                  <span className="text-coral-red">Quality &nbsp;</span>
              Shoes
            </h2>
            <p className="mt-4 lg:max-w-lg info-text "> {/*info text is smtn which we created in index css. It has our deafult styles like text-slate-gray and stuff*/}
            Ensuring premium comfort and style, our meticulously crafted footwear is designed to
            elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
            </p>
            <p className="info-text lg:max-w-lg mt-6">
            Our dedication to detail and excellence ensures your satisfaction
            </p>
            <div className="mt-11">
              <Button label="View Details"/>
            </div>
      </div> {/*FIRST DIV THAT THE FLEX BOX USING*/}

      <div className="flex flex-1 justify-center items-center">
          <img src={shoe8} alt="" height={522} width={570}/>
      </div> {/*SECOND DIV THAT THE FLEX BOX USING for the image part*/}
    </section>
  )
}

export default SuperQuality;