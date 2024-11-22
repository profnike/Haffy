import React from "react";


export default function Home() {
   const data=[{image:"image",title:"Fragrance",text:"hdsjkkkakakskmkasnsn hnahghashdbdjk nhjhsajsklkm ksyyhwkdmm"},
    {image:"image",title:"Fragrance",text:"hdsjkkkakakskmkasnsn hnahghashdbdjk nhjhsajsklkm ksyyhwkdmm"},
    {image:"image",title:"Fragrance",text:"hdsjkkkakakskmkasnsn hnahghashdbdjk nhjhsajsklkm ksyyhwkdmm"}] 
  
   
  
    return (
     <div className="  bg-primary">
    
      <div className=" mx-auto max-w-[85%]  " >
        <div className="md:flex justify-start  py-10 ">
        {data.map(({image,title,text})=>( 
          <div className="flex flex-col items-center justify-center text-white mb-5 md:mb-0">
          <p>{image}</p>
          <h3>{title}</h3>
          <p className=" text-center">{text}</p>
          </div>
        ))}
      
      </div>
     </div>
        
        </div>
    );
  }
  