import React from 'react'

const shoeCard = ({imgURL, changeBigShoeImage, bigShoeImage}) => {

    const handleClick=()=>{
        if(bigShoeImage!==imgURL.bigShoe)
        {
            changeBigShoeImage(imgURL.bigShoe)
        }
    }

  return (
    <div className={`border-2 rounded-xl
    ${bigShoeImage===imageURL.bigShoe?
    'border-coral-red': 'border-transparent'} 
    cursor-pointer max-sm:flex-1`}
    onClick={handleClick}>
        <div clasName="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img src={imgURL.thumbnail}/>
        </div>
    </div>
  )
}

export default shoeCard;