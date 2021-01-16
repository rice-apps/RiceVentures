import * as React from "react";
 
const PositionBox = ({
   title,
   description,
   linkDesc,
   link
  
}) => {
   return (
       <div className='w-full xl:w-1/4 flex flex-col items-center justify-around py-5'>
           <h2 className ='text-3xl p-5'>
               {title}
           </h2>
           <p className='text-lg xl:text-xl p-5'>
               {description}
           </p>
           <button
               className="applyButton"
               type="button"
               onClick={(e) => {
                   e.preventDefault();
                   window.open(link,"_blank");
               }}
               >
                   {linkDesc}
           </button>
          
       </div>
 
   )
}
export default PositionBox;
