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
import { Switch } from "@/components/ui/switch";

// =====================================================
// MODULES
// =====================================================

const roles = [
  {
    label: "Person 1",
    value: "Person1",
  },
  {
    label: "Person 2",
    value: "Person2",
  },
  {
    label: "Person 3",
    value: "Person3",
  },
  {
    label: "Person 4",
    value: "Person4",
  },
];




// =====================================================
// PAGE
// =====================================================

export default function Page() {
  const [selectedRoles, setSelectedRoles] = useState([]);














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
      { title: "Billing Account Management", link: "/billing-account-management" },
      { title: "Edit billing account", link: "" },
    ]}>
      <div className="flex flex-wrap items-center gap-4 mb-5">
        <div className="flex-1">
          <h3 className="text-[32px] text-[#1b776f] font-medium  mb-2">Edit billing account</h3>
        </div>
      </div>

      <form className="flex flex-col gap-[24px]">

        <div className="grid grid-cols-2 gap-[24px] border border-[#D9D9D9] border-[1px] rounded-[16px] p-[16px]">
          <div className="col-span-2 flex flex-col gap-4 lg:flex-row lg:items-center">

            <Label
              className="lg:min-w-[160px] text-[20px] text-[#1b776f]"
            >
              Company Information
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
              Company Name <span className="text-[#EC221F]">*</span>
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
              Billing Name <span className="text-[#EC221F]">*</span>
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
              htmlFor="roleName"
              className="lg:min-w-[160px]"
            >
              GST Number
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
          <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">

            <Label
              htmlFor="roleName"
              className="lg:min-w-[160px]"
            >
              PAN Number
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

          {/* <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">
            <Label
              htmlFor="role"
              className="lg:min-w-[160px]"
            >
              Role <span className="text-[#EC221F]">*</span>
            </Label>

            <MultiSelect
              options={roles}
              value={selectedRoles}
              onChange={setSelectedRoles}
              // placeholder="Select..."
            />
          </div> */}









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

            <Select className=""> <SelectTrigger className="!bg-[#F5F5F5]"> <SelectValue placeholder="Select State" /> </SelectTrigger> <SelectContent className=""> <SelectItem value="alberta">Alberta</SelectItem> <SelectItem value="british">British Columbia</SelectItem> <SelectItem value="manitoba">Manitoba</SelectItem> <SelectItem value="brunswick">New Brunswick</SelectItem> <SelectItem value="ontario">Ontario</SelectItem> </SelectContent> </Select>
          </div>
          <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">
            <Label
              htmlFor="role"
              className="lg:min-w-[160px]"
            >
              State <span className="text-[#EC221F]">*</span>
            </Label>

            <Select className=""> <SelectTrigger className="!bg-[#F5F5F5]"> <SelectValue placeholder="Select State" /> </SelectTrigger> <SelectContent className=""> <SelectItem value="alberta">Alberta</SelectItem> <SelectItem value="british">British Columbia</SelectItem> <SelectItem value="manitoba">Manitoba</SelectItem> <SelectItem value="brunswick">New Brunswick</SelectItem> <SelectItem value="ontario">Ontario</SelectItem> </SelectContent> </Select>
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
        <div className="grid grid-cols-2 gap-[24px] border border-[#D9D9D9] border-[1px] rounded-[16px] p-[16px]">
          <div className="col-span-2 flex flex-col gap-4 lg:flex-row justify-between lg:items-center">

            <Label
              className="lg:min-w-[160px] text-[20px] text-[#1b776f]"
            >
              Billing Address
            </Label>
            <div className="flex lg:items-center gap-1.5 ">
              <Checkbox id="term6" size="sm" color="default" />
              <Label
                htmlFor="term6"
                className="text-base text-muted-foreground font-normal"
              >
                Same as Registered Address
              </Label>
            </div>

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

            <Select className=""> <SelectTrigger className="!bg-[#F5F5F5]"> <SelectValue placeholder="Select State" /> </SelectTrigger> <SelectContent className=""> <SelectItem value="alberta">Alberta</SelectItem> <SelectItem value="british">British Columbia</SelectItem> <SelectItem value="manitoba">Manitoba</SelectItem> <SelectItem value="brunswick">New Brunswick</SelectItem> <SelectItem value="ontario">Ontario</SelectItem> </SelectContent> </Select>
          </div>
          <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">
            <Label
              htmlFor="role"
              className="lg:min-w-[160px]"
            >
              State <span className="text-[#EC221F]">*</span>
            </Label>

            <Select className=""> <SelectTrigger className="!bg-[#F5F5F5]"> <SelectValue placeholder="Select State" /> </SelectTrigger> <SelectContent className=""> <SelectItem value="alberta">Alberta</SelectItem> <SelectItem value="british">British Columbia</SelectItem> <SelectItem value="manitoba">Manitoba</SelectItem> <SelectItem value="brunswick">New Brunswick</SelectItem> <SelectItem value="ontario">Ontario</SelectItem> </SelectContent> </Select>
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
        <div className="grid grid-cols-2 gap-[24px] border border-[#D9D9D9] border-[1px] rounded-[16px] p-[16px]">
          <div className="col-span-2 flex flex-col gap-4 lg:flex-row justify-between lg:items-center">

            <Label
              className="lg:min-w-[160px] text-[20px] text-[#1b776f]"
            >
              Contact Details
            </Label>


          </div>
          <AlertDialog>
            <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">

              <Label
                htmlFor="role"
                className="lg:min-w-[160px]"
              >
                Select Primary Contact Person{" "}
                <span className="text-[#EC221F]">*</span>
              </Label>

              <MultiSelect
                options={roles}
                value={selectedRoles}
                onChange={setSelectedRoles}
                placeholder="Select..."
                showAddButton
                addButton={
                  <AlertDialogTrigger asChild>
                    <button
                      type="button"
                      onClick={() => { }}
                      className="flex h-[42px] w-full items-center justify-center rounded-[6px] border border-[#3B9B9B] bg-white px-[10px] text-[14px] font-medium text-[#2C8C8C] transition hover:bg-[#F4FAFA]"
                    >
                      Add New Contact Person
                    </button>
                  </AlertDialogTrigger>
                }
              />

            </div>

            {/* Alert Dialog */}
            <AlertDialogContent >

              <AlertDialogHeader>

                <h3 className="text-[24px] font-medium text-[#1A766D] mb-[32px]">
                  Add New Contact Person
                </h3>

                <div className="">

                  {/* <h4 className="text-[20px] text-[#1A766D] font-[500] mb-[24px]">
                    Contact Information
                  </h4> */}

                  <div className="grid grid-cols-1 gap-[24px]">

                    <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">

              <Label
              htmlFor="roleName"
              className="lg:min-w-[160px]"
            >
              Contact Name <span className="text-[#EC221F]">*</span>
            </Label>


            <InputGroup merged>

              {/* <InputGroupText>

                <Icon icon="mdi:call" />

              </InputGroupText> */}


              <Input
                type="text"
                placeholder="Enter Contact Name"
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
              Contact Email Address <span className="text-[#EC221F]">*</span>
            </Label>


            <InputGroup merged>

              {/* <InputGroupText>

                <Icon icon="mdi:call" />

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
              Contact Number <span className="text-[#EC221F]">*</span>
            </Label>


            <InputGroup merged>

              {/* <InputGroupText>

                <Icon icon="mdi:call" />

              </InputGroupText> */}


              <Input
                type="text"
                placeholder="Enter Contact Number"
                id="roleName"
                className="bg-[#F5F5F5]"

              />

            </InputGroup>

          </div>

                  </div>

                </div>

              </AlertDialogHeader>

              <AlertDialogFooter>

                <AlertDialogCancel className="bg-[#5A5A5A]">
                  Cancel
                </AlertDialogCancel>

                <Button className="bg-[#1A766D] hover:bg-[#1b776f]/80">
                  Add Contact Person
                </Button>

              </AlertDialogFooter>

            </AlertDialogContent>
          </AlertDialog>









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
              <Button
              >
                Add Billing Account
              </Button>
          

        </div>

      </form>



    </Card>

  );
}