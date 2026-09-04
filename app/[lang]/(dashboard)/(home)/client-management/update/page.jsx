"use client";

import React, { useState } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  InputGroup,
  InputGroupText,
} from "@/components/ui/input-group";

import { Icon } from "@iconify/react";
import Card from "@/components/ui/card-snippet";
import MultiSelect from "@/components/ui/MultiSelect";
import CustomSelect from "@/components/ui/CustomSelect";
import { Switch } from "@/components/ui/switch";

// =====================================================
// MODULES
// =====================================================

const roles = [
   {
    label: "Account 1",
    value: "Account1",
  },
  {
    label: "Account 2",
    value: "Account2",
  },
  {
    label: "Account 3",
    value: "Account3",
  },
  {
    label: "Account 4",
    value: "Account4",
  },
];

const roles1 = [
  {
    label: "Role 1",
    value: "role1",
  },
  {
    label: "Role 2",
    value: "role2",
  },
  {
    label: "Role 3",
    value: "role3",
  },
  {
    label: "Role 4",
    value: "role4",
  },
];




// =====================================================
// PAGE
// =====================================================

export default function Page() {
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedRoles1, setSelectedRoles1] = useState([]);














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

    <Card breadcrumbdata={[
      { title: "Dashboard", link: "/" },
      { title: "Client Management", link: "/client-management" },
      { title: "Edit Client", link: "" },
    ]}> 
      <div className="flex flex-wrap items-center gap-4 mb-5">
        <div className="flex-1">
          <h3 className="text-[32px] text-[#1b776f] font-medium  mb-2">Edit Client</h3>
        </div>
      </div>

      <form className="flex flex-col gap-[24px]">

        <div className="grid grid-cols-2 gap-[24px] border border-[#D9D9D9] border-[1px] rounded-[16px] p-[16px]">
          <div className="col-span-2 flex flex-col gap-4 lg:flex-row lg:items-center">

            <Label
              className="lg:min-w-[160px] text-[20px] text-[#1b776f]"
            >
             Basic Information
            </Label>

          </div>


          {/* ================================================= */}
          {/* ROLE NAME */}
          {/* ================================================= */}

          <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">

            <Label
              htmlFor="roleName"
              className="lg:min-w-[160px]"
            >
              Full Name <span className="text-[#EC221F]">*</span>
            </Label>


            <InputGroup merged>

              {/* <InputGroupText>

                <Icon icon="mdi:user" />

              </InputGroupText> */}


              <Input
                type="text"
                placeholder="Enter Full Name"
                id="roleName"
                className="bg-[#F5F5F5]"

              />

            </InputGroup>

          </div>


          {/* ================================================= */}
          {/* ROLE NAME */}
          {/* ================================================= */}

          <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">

            <Label
              htmlFor="roleName"
              className="lg:min-w-[160px]"
            >
             Email Address <span className="text-[#EC221F]">*</span>
            </Label>


            <InputGroup merged>

              {/* <InputGroupText>

                <Icon icon="mdi:email" />

              </InputGroupText> */}


              <Input
                type="text"
                placeholder="Enter Email Address"
                id="roleName"
                className="bg-[#F5F5F5]"

              />

            </InputGroup>

          </div>



          <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">

            <Label
              htmlFor="roleName"
              className="lg:min-w-[160px]"
            >
             Phone Number <span className="text-[#EC221F]">*</span>
            </Label>


            <InputGroup merged>

              {/* <InputGroupText>

                <Icon icon="mdi:call" />

              </InputGroupText> */}


              <Input
                type="text"
                placeholder="Enter Mobile Number"
                id="roleName"
                className="bg-[#F5F5F5]"

              />

            </InputGroup>

          </div>
          <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">

            <Label
              htmlFor="roleName"
              className="lg:min-w-[160px]"
            >
              Designation <span className="text-[#EC221F]">*</span>
            </Label>


            <InputGroup merged>

              {/* <InputGroupText>

                <Icon icon="mdi:call" />

              </InputGroupText> */}


              <Input
                type="text"
                placeholder="Enter Designation"
                id="roleName"
                className="bg-[#F5F5F5]"

              />

            </InputGroup>

          </div>

          <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">
            <Label
              htmlFor="role"
              className="lg:min-w-[160px]"
            >
              Role <span className="text-[#EC221F]">*</span>
            </Label>

            <MultiSelect
              options={roles1 }
              value={selectedRoles1}
              onChange={setSelectedRoles1}
              // placeholder="Select..."
            />
          </div>
          <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">
            <Label
              htmlFor="role"
              className="lg:min-w-[160px]"
            >
              Linked Billing Accounts <span className="text-[#EC221F]">*</span>
            </Label>

            <CustomSelect
              options={roles}
              value={selectedRoles}
              onChange={setSelectedRoles}
              // placeholder="Select..."
            />
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




        </div>
        <div className="grid grid-cols-2 gap-[24px] border border-[#D9D9D9] border-[1px] rounded-[16px] p-[16px]">
          <div className="col-span-2 flex flex-col gap-4 lg:flex-row lg:items-center">

            <Label
              className="lg:min-w-[160px] text-[20px] text-[#1b776f]"
            >
              Registered Address
            </Label>

          </div>


          {/* ================================================= */}
          {/* ROLE NAME */}
          {/* ================================================= */}

          <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">

            <Label
              htmlFor="roleName"
              className="lg:min-w-[160px]"
            >
              Address Line 1 <span className="text-[#EC221F]">*</span>
            </Label>


            <InputGroup merged>

              {/* <InputGroupText>

                <Icon icon="mdi:user" />

              </InputGroupText> */}


              <Input
                type="text"
                // placeholder="Enter Full Name"
                id="roleName"
                className="bg-[#F5F5F5]"

              />

            </InputGroup>

          </div>


          {/* ================================================= */}
          {/* ROLE NAME */}
          {/* ================================================= */}

          <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">

            <Label
              htmlFor="roleName"
              className="lg:min-w-[160px]"
            >
              Address Line 2
            </Label>


            <InputGroup merged>

              {/* <InputGroupText>

                <Icon icon="mdi:email" />

              </InputGroupText> */}


              <Input
                type="text"
                // placeholder="Enter Email Address"
                id="roleName"
                className="bg-[#F5F5F5]"

              />

            </InputGroup>

          </div>
          <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">
            <Label
              htmlFor="role"
              className="lg:min-w-[160px]"
            >
              City <span className="text-[#EC221F]">*</span>
            </Label>

            <Select className=""> <SelectTrigger className="!bg-[#F5F5F5]"> <SelectValue placeholder="Select" /> </SelectTrigger> <SelectContent className=""> <SelectItem value="alberta">Alberta</SelectItem> <SelectItem value="british">British Columbia</SelectItem> <SelectItem value="manitoba">Manitoba</SelectItem> <SelectItem value="brunswick">New Brunswick</SelectItem> <SelectItem value="ontario">Ontario</SelectItem> </SelectContent> </Select>
          </div>
          <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">
            <Label
              htmlFor="role"
              className="lg:min-w-[160px]"
            >
              State <span className="text-[#EC221F]">*</span>
            </Label>

            <Select className=""> <SelectTrigger className="!bg-[#F5F5F5]"> <SelectValue placeholder="Select" /> </SelectTrigger> <SelectContent className=""> <SelectItem value="alberta">Alberta</SelectItem> <SelectItem value="british">British Columbia</SelectItem> <SelectItem value="manitoba">Manitoba</SelectItem> <SelectItem value="brunswick">New Brunswick</SelectItem> <SelectItem value="ontario">Ontario</SelectItem> </SelectContent> </Select>
          </div>
          <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">
            <Label
              htmlFor="role"
              className="lg:min-w-[160px]"
            >
              Country <span className="text-[#EC221F]">*</span>
            </Label>

            <Select className=""> <SelectTrigger className="!bg-[#F5F5F5]"> <SelectValue placeholder="Select State" /> </SelectTrigger> <SelectContent className=""> <SelectItem value="alberta">Alberta</SelectItem> <SelectItem value="british">British Columbia</SelectItem> <SelectItem value="manitoba">Manitoba</SelectItem> <SelectItem value="brunswick">New Brunswick</SelectItem> <SelectItem value="ontario">Ontario</SelectItem> </SelectContent> </Select>
          </div>



          <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">

            <Label
              htmlFor="roleName"
              className="lg:min-w-[160px]"
            >
              Zipcode <span className="text-[#EC221F]">*</span>
            </Label>


            <InputGroup merged>

              {/* <InputGroupText>

                <Icon icon="mdi:call" />

              </InputGroupText> */}


              <Input
                type="text"
                // placeholder="Enter Mobile Number"
                id="roleName"
                className="bg-[#F5F5F5]"

              />

            </InputGroup>

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




        </div>
      

        <div className=" mt-[12px]  gap-4">
          <div className="block">
            <Label
              className="lg:min-w-[160px] text-[16px] text-[#1E1E1E]"
            >
              Account Status
            </Label>
            </div>
            <div className="mt-[12px]">

           <Switch size="lg" id="s1" />
            </div>
        </div>
        <div className=" mt-[32px] flex gap-4">

          <Button className="bg-[#5A5A5A]" type="submit">
            Discard
          </Button>
          <Button  type="submit">
            Save Changes
          </Button>
    

        </div>

      </form>



    </Card>

  );
}