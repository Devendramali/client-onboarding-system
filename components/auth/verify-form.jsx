"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";

const VerfiyForm = () => {
  const totalOtpField = 6;

  const otpArray = Array.from({ length: totalOtpField }, () => "");

  const [otp, setOtp] = useState(otpArray);

  const otpFields = Array.from(
    { length: totalOtpField },
    (_, index) => index
  );

  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const { value } = e.target;

    if (!isNaN(value) && value.length <= 1) {
      const newOtp = [...otp];

      newOtp[index] = value;

      setOtp(newOtp);

      if (
        value.length === 1 &&
        index < totalOtpField - 1
      ) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, event) => {
    if (
      event.key === "Backspace" &&
      otp[index] === "" &&
      index > 0
    ) {
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];

        newOtp[index - 1] = "";

        return newOtp;
      });

      inputRefs.current[index - 1]?.focus();
    }

    if (
      event.key === "ArrowLeft" &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }

    if (
      event.key === "ArrowRight" &&
      index < totalOtpField - 1
    ) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = async () => {
    const enteredOtp = otp.join("");

    console.log("Entered OTP:", enteredOtp);

    if (enteredOtp.length !== totalOtpField) {
      toast.error("Please enter the complete OTP.");
      return;
    }

    try {
      // Replace this with your API call
      console.log("Verifying OTP:", enteredOtp);

      // Example:
      // const response = await verifyOtp(enteredOtp);

      // if (response.ok) {
      //   toast.success("OTP Verified Successfully");
      //   window.location.assign("/dashboard");
      // } else {
      //   toast.error(response.error);
      // }

      toast.success("OTP Verified Successfully");

      setOtp(otpArray);

      inputRefs.current[0]?.focus();
              window.location.assign("/dashboard");

    } catch (error) {
      console.error(error);

      toast.error("OTP verification failed.");
    }
  };

  const isOtpComplete = otp.every(
    (digit) => digit !== ""
  );

  return (
    <div className="w-full md:w-[480px] py-5">

      <Link href="/dashboard" className="inline-block">
        <Image
          src="/images/all-img/logo.svg"
          alt="DigiHost Logo"
          width={156}
          height={56}
          className="object-contain"
          priority
        />
      </Link>

      <div className="2xl:mt-8 mt-6 2xl:text-3xl text-2xl font-bold text-default-900">
        Two Factor Verification
      </div>

      <div className="2xl:text-lg text-base text-default-600 mt-2 leading-6">
        Enter the 6 figure confirmation code shown on the email
      </div>

      <form
        className="mt-8"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="flex flex-wrap gap-1 lg:gap-6">

          {otpFields.map((index) => (
            <Input
              key={`otp-code-${index}`}
              type="text"
              inputMode="numeric"
              id={`otp${index}`}
              name={`otp${index}`}
              value={otp[index]}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(event) =>
                handleKeyDown(index, event)
              }
              maxLength={1}
              className="w-10 h-10 sm:w-[60px] sm:h-16 rounded border-[#1b776f] text-center text-2xl font-medium text-[#1b776f]"
              ref={(ref) => {
                inputRefs.current[index] = ref;
              }}
            />
          ))}

        </div>

        <div className="mt-6">
          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={!isOtpComplete}
          >
            Verify Now
          </Button>
        </div>

      </form>
    </div>
  );
};

export default VerfiyForm;