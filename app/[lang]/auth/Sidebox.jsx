"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import background from "@/public/images/auth/digi.png";
import bgcard from "@/public/images/auth/bgcard.png";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Fragment, useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent
} from "@/components/ui/dialog";
import LogInForm from "@/components/auth/login-form";

const Sidebox = () => {
  return (
    <>
 <div className="basis-1/2 bg-[#1b776f] w-full relative hidden xl:flex justify-center items-center bg-linear-to-br
                            from-[#1b776f]-600 via-[#1b776f]-400 to-[#1b776f]-600"
          >
            <Image
              src={bgcard}
              alt="image"
              className="absolute top-0 left-0 z-1 w-full h-full"
            />
            <Image
              src={background}
              alt="image"
              className="absolute bottom-0 left-0 z-2 w-full h-full object-contain object-bottom"
            />
            <div className="relative z-10  bg-[rgba(30,30,30,0.24)] backdrop-blur-[4px]  py-14 px-16 2xl:py-[84px] 2xl:pl-[50px] 2xl:pr-[136px] rounded max-w-[640px]">
              <div>
                {/* <Button
                  className="bg-transparent hover:bg-transparent h-fit w-fit p-0"
                  onClick={() => setOpenVideo(true)}
                >
                  <Icon
                    icon="heroicons:play-solid"
                    className="text-primary-foreground h-[78px] w-[78px] -ml-2"
                  />
                </Button> */}

             
                <div className="text-[64px] leading-[50px]  leading-[64px] font-[500] mt-2.5">
                  {/* <span </span> */}
                  <span className="text-[#fff]  ">All Clients, 
                    Managed in 
                    One Place.</span></div>
                <div className="mt-8 text-[#fff]  text-[20px] font-[400]">
                 Stay organized, save time, and keep every client moving forward.
                </div>
              </div>
            </div>
          </div>

    
    
    </>
  )
}

export default Sidebox