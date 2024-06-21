import React from 'react'

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px]
    w-full rounded-[20px] shadow-3xl px-10 py-10'> {/*Parent div for flex*/}
        <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'> {/*dont get confused of this FLEX as it is for the icon and its bg. Change justify-center to justify-start and you will understand*/}
            <img src={imgURL} alt={label} width={24} height={24}/>
        </div>
        <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
        <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>{subtext}</p>

    </div>
  )
}

export default ServiceCard