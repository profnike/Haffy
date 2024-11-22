"use client";
import { useEffect } from "react";
import {  NavBar } from "../index.js";


export default function HeroSection() {
   const path="/images/haffy-home.png"
   
   
     return(
      <>
         
      
      <div style={{backgroundImage:`url(${path})`}}  className="ease-out duration-700 bg-cover h-screen  w-full bg-top bg-no-repeat">
         <NavBar/>
         
           <div className="h-screen flex flex-col justify-start max-w-[85%] mx-auto text-left items-start  ">
           <div className="my-20 w-full md:w-2/4 text-white   ">
        <div>
        
                        <h2 className="text-4xl text-white font-200 text-info  md:text-6xl">Everything</h2>
                        <div className="flex items-center gap-2">
                        <h2 className="text-white -mt-2 mb-4  text-4xl font-light  md:text-6xl">
                           Hair 
                        </h2>
                        <div className="text-primary text-4xl   rounded-full  w-2 h-2 bg-primary"></div>
                        </div>
                  
                  </div>

                  
                     <h2 className="text-xl  ">
                     Discover the secret to healthy, radiant hair with our premium hair care solutions.
                     </h2>
                 

                 
                     <p className="text-lg font-light  ">
                     At Haffy, we are passionate about creating products that cater to all hair types, textures, and needs.
                     </p>
                 

                     

      </div>
           </div>
           </div> 
         
            </>
         )
       
}