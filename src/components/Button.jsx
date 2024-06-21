import React from 'react'

const Button = ({label, iconURL, backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
    <button
    className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red text-white border-coral-red"
    } rounded-full ${fullWidth && "w-full"}`}
  >
        {label}

        {iconURL && <img 
            src={iconURL}
            alt="arrow right icon"
            className="ml-2 rounded-full
            w-5 h-5"
        />}  {/*iconURL && says if there is image then show the image or else show nothing. If its not coded then the default icon image will appear */}
        </button>    

    )
}

export default Button