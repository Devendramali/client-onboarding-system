"use client";
import {Fragment} from "react"
import Image from "next/image";
import { Icon } from "@iconify/react";
import background from "@/public/images/auth/line.png";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";
import { Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent } from "@/components/ui/dialog";
import VerfiyForm from "@/components/auth/verify-form";
import Sidebox from "@/app/[lang]/auth/Sidebox";

const VerifyPage = () => {
  const [openVideo, setOpenVideo] = useState(false);
  return (
    <Fragment>
      <div className="min-h-screen bg-card  flex items-center  overflow-hidden w-full">
        <div className="lg-inner-column flex w-full flex-wrap justify-center overflow-y-auto">
          <Sidebox/>

          <div className=" min-h-screen basis-full md:basis-1/2 w-full px-4 py-5 flex justify-center items-center">
            <div className="lg:w-[480px]">
              <VerfiyForm />
            </div>
          </div>
        </div>
      </div>
      <Dialog open={openVideo}>
        <DialogContent size="lg" className="p-0" hiddenCloseIcon>
        <DialogHeader className="hidden">
          <DialogTitle className="hidden"></DialogTitle>
        </DialogHeader>
          <Button
            size="icon"
            onClick={() => setOpenVideo(false)}
            className="absolute -top-4 -right-4 bg-default-900"
          >
            <X className="w-6 h-6" />
          </Button>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/8D6b3McyhhU?si=zGOlY311c21dR70j"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen 
          ></iframe>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default VerifyPage;
