"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import {
  InputGroup,
  InputGroupText,
} from "@/components/ui/input-group";

import { Icon } from "@iconify/react";
import Card from "@/components/ui/card-snippet";


// =====================================================
// MODULES
// =====================================================




// =====================================================
// PAGE
// =====================================================

export default function Page() {

  





 





  // =====================================================
  // HANDLE SUBMIT
  // =====================================================

  const handleSubmit = (e) => {

    e.preventDefault();

    const formData = {
      roleName,
      description,
      permissions,
    };

    console.log("Role Data:", formData);

  };


  // =====================================================
  // RENDER
  // =====================================================

  return (

    <Card  breadcrumbdata={[
          { title: "Dashboard", link: "/" },
          { title: "User Management", link: "/user-management" },
          { title: "Update User", link: "/user-management/update" },
        ]}>
             <div className="flex flex-wrap items-center gap-4 mb-5">
              <div className="flex-1">
                <h3 className="text-xl text-[#1b776f] font-medium  mb-2">Update User</h3>
              </div>
          </div>

      <form >

        <div className="grid grid-cols-2 gap-4 w-[60%]">


          {/* ================================================= */}
          {/* ROLE NAME */}
          {/* ================================================= */}

          <div className="col-span-2 flex flex-col gap-2 lg:flex-row lg:items-center">

            <Label
              htmlFor="roleName"
              className="lg:min-w-[160px]"
            >
             Full Name
            </Label>


            <InputGroup merged>

              <InputGroupText>

                <Icon icon="mdi:user" />

              </InputGroupText>


              <Input
                type="text"
                placeholder="Enter Full Name"
                id="roleName"
               
              />

            </InputGroup>

          </div>


          {/* ================================================= */}
          {/* ROLE NAME */}
          {/* ================================================= */}

          <div className="col-span-2 flex flex-col gap-2 lg:flex-row lg:items-center">

            <Label
              htmlFor="roleName"
              className="lg:min-w-[160px]"
            >
             Email Address
            </Label>


            <InputGroup merged>

              <InputGroupText>

                <Icon icon="mdi:email" />

              </InputGroupText>


              <Input
                type="text"
                placeholder="Enter Email Address"
                id="roleName"
              
              />

            </InputGroup>

          </div>



          <div className="col-span-2 flex flex-col gap-2 lg:flex-row lg:items-center">

            <Label
              htmlFor="roleName"
              className="lg:min-w-[160px]"
            >
             Mobile Number
            </Label>


            <InputGroup merged>

              <InputGroupText>

                <Icon icon="mdi:call" />

              </InputGroupText>


              <Input
                type="text"
                placeholder="Enter Mobile Number"
                id="roleName"
             
              />

            </InputGroup>

          </div>

            <div className="col-span-2  flex flex-col lg:items-center lg:flex-row gap-2">
              <Label htmlFor="state" className="lg:min-w-[160px]">Role </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alberta">Alberta</SelectItem>
                  <SelectItem value="british">British Columbia</SelectItem>
                  <SelectItem value="manitoba">Manitoba</SelectItem>
                  <SelectItem value="brunswick">New Brunswick</SelectItem>
                  <SelectItem value="ontario">Ontario</SelectItem>
                </SelectContent>
              </Select>
            </div>

        <div className="col-span-2 lg:pl-[164px] gap-2">
          <div className="flex lg:items-center gap-1.5">
            <Checkbox id="term6" size="sm" color="default" />
            <Label
              htmlFor="term6"
              className="text-base text-muted-foreground font-normal"
            >
            Send Login Credentials
            </Label>
          </div>
        </div>



         



          {/* ================================================= */}
          {/* PERMISSION TITLE */}
          {/* ================================================= */}




          {/* ================================================= */}
          {/* MODULE PERMISSIONS */}
          {/* ================================================= */}




          {/* ================================================= */}
          {/* SUBMIT */}
          {/* ================================================= */}

          <div className="col-span-2 lg:pl-[160px]">

            <Button type="submit">
              Submit
            </Button>

          </div>


        </div>

      </form>

    </Card>

  );
}