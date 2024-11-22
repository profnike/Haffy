"use client"
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import { Footer, HeroSection, Meta, NavBar } from "@/components";
import { usePathname } from "next/navigation";
import { navLinks } from "@/helpers/data";
import { Nav } from "..";



const inter = Inter({ subsets: ["latin"], width:["100%"] });

export const metadata = {
  title: "Haffy",
  description: "Transform your hair with our natural, expert-crafted products designed for health, strength, and shine",
};


export default function DefaultLayout({ children }) {
  const [pageTitle, setPageTitle] = useState("");
  const pathname = usePathname("");
  

  const getPageTitle = () => {
    const page = navLinks.find((p) => p.path == pathname);
    setPageTitle(page ? page?.title : "Haffy - Grow Healthy");
  };

  useEffect(() => {
    getPageTitle();
  }, [pathname]);
  return (
    <>
      <Meta title={pathname == "/" ? "" : pageTitle} />
     
      <div className="mx-auto flex min-h-screen max-w-[1800px] flex-col justify-between ">
        <div className=" ">
          <HeroSection/>
        {/* <NavBar/> */}
         {children}
       
       </div> 
        <div>
         <Footer/>
          
          </div>
       
        </div>
       
        </>
  
  
  );
}
