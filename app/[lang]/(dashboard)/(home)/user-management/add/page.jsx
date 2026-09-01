"use client";

import React,{ useState } from "react";

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

// =====================================================
// MODULES
// =====================================================

const roles = [
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
          { title: "User Management", link: "/user-management" },
          { title: "Add User", link: "/user-management/add" },
        ]}>
           <div className="flex flex-wrap items-center gap-4 mb-5">
              <div className="flex-1">
                <h3 className="text-[32px] text-[#1b776f] font-medium  mb-2">Add User</h3>
              </div>
          </div>

      <form >

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

          <div className="col-span-1 flex flex-col gap-2 lg:flex-col lg:items-left">

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

          <div className="col-span-1 flex flex-col gap-2 lg:flex-col lg:items-left">

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



          <div className="col-span-1 flex flex-col gap-2 lg:flex-col lg:items-left">

            <Label
              htmlFor="roleName"
              className="lg:min-w-[160px]"
            >
             Mobile Number <span className="text-[#EC221F]">*</span>
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

          <div className="col-span-1 flex flex-col gap-2 lg:flex-col lg:items-left">
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
    placeholder="Select..."
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
        <div className="flex lg:items-center gap-1.5 mt-[24px]">
            <Checkbox id="term6" size="sm" color="default" />
            <Label
              htmlFor="term6"
              className="text-base text-muted-foreground font-normal"
            >
            Send Login Credentials
            </Label>
          </div>
               <div className=" mt-[36px] flex gap-4">

            <Button className="bg-[#5A5A5A]" type="submit">
              Discard
            </Button>
              <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                          >
                            Add User
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="max-w-[800px]">
                          <AlertDialogHeader>
                            <h3 className="text-[24px] font-medium text-[#1b776f]  mb-[32px]">Confirm New User </h3>
                            <div className="border border-[#D9D9D9] rounded-[16px] p-[16px]">
                            <h4 className="text-[20px] text-[#1A766D] font-[500] mb-[24px]">Basic Information</h4>
                            <div className="grid grid-cols-2 gap-[24px]">
                              <div className="col-span-1">
                                <h4 className="text-[16px] text-[#757575]">Full Name:</h4>
                                <h3 className="text-[#1E1E1E] text-[20px]">jhone doe</h3>
                              </div>
                              <div className="col-span-1">
                                <h4 className="text-[16px] text-[#757575]">Email Address:</h4>
                                <h3 className="text-[#1E1E1E] text-[20px]">abc@gmail.com</h3>
                              </div>
                              <div className="col-span-1">
                                <h4 className="text-[16px] text-[#757575]">Phone Number:</h4>
                                <h3 className="text-[#1E1E1E] text-[20px]">8945761230</h3>
                              </div>
                              <div className="col-span-1">
                                <h4 className="text-[16px] text-[#757575]">Role</h4>
                                <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px]">Admin</h3>
                              </div>
                              </div>

                              {/* <h2 className="text-[20px] text-[#1A766D] font-[500] mt-[32px] mb-0">Permissions </h2> */}
                               
                              
                            </div>
                              <div className="flex-1 flex  items-center gap-1.5 mt-[26px] mb-[20px]">
            <Checkbox
              size="sm"
              className="border-default-300 mt-[1px]"
              id="isRemebered"
            />
            <Label
              htmlFor="isRemebered"
              className="text-sm text-default-600 cursor-pointer whitespace-nowrap"
            >
              Send Login Credentials
            </Label>
          </div>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel  className="bg-[#5A5A5A]">
                              Go back and Edit
                            </AlertDialogCancel>
                            <a href="/user-management" className="inline-flex items-center justify-center rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-0 disabled:opacity-50 whitespace-nowrap disabled:pointer-events-none cursor-pointer text-primary-foreground hover:bg-[#1b776f]/80 h-10 px-4 py-[10px] bg-[#1A766D]">
                              Confirm and Add User
                            </a>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>

          </div>

      </form>

    </Card>

  );
}