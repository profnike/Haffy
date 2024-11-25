import React from "react";


export default function Home() {
   const data=[{image:"images/paraben-free.png",title:"Paraben Free",text:"Paraben-free isn’t just a label—it’s a promise to prioritize your health and well-being. "},
    {image:"images/nature.png",title:"Natural Ingredients",text:"Our natural ingredient formulas are designed to protect, nurture, and enhance your natural beauty."},
    {image:"images/sulphur-free.png",title:"Sulphur Free",text:"No sulphur, no worries! Our sulphur-free formulas keep your hair soft, shiny, and damage-free."}] 
  
   
  
    return (
     <div className="  bg-primary">
    
      <div className=" mx-auto max-w-[85%]  " >
        <div className="md:flex justify-start items-start   py-10 ">
        {data.map(({image,title,text})=>( 
          <div className="flex flex-col items-center justify-center text-white mb-5 md:mb-0 md:mr-8 ">
          <div className=" w-28 h-28 mb-5"><img src={image} alt="" className="w-full"/></div>
          <h3 className=" font-bold text-lg">{title}</h3>
          <p className=" text-center">{text}</p>
          </div>
        ))}
      
      </div>
     </div>
        
        </div>
    );
  }
  