"use client";

import React, { useState } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
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
import { useForm } from "react-hook-form";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  InputGroup,
  InputGroupText,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";

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

const roles2 = [
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

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date is required.",
  }),
});
const FormSchema1 = z.object({
  dob: z.date({
    required_error: "A date is required.",
  }),
});


// =====================================================
// PAGE
// =====================================================

export default function Page() {
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedRoles2, setSelectedRoles2] = useState([]);


    function onSubmit(data) {
      toast({
        title: "You submitted the following values:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    }














  // =====================================================
  // HANDLE SUBMIT
  // =====================================================

  // const handleSubmit = (e) => {

  //   e.preventDefault();

  //   const formData = {
  //     roleName,
  //     description,
  //     permissions,
  //   };

  //   console.log("Role Data:", formData);

  // };
  // const handleSubmit1 = (e) => {

  //   e.preventDefault();

  //   const formData1 = {
  //     roleName,
  //     description,
  //     permissions,
  //   };

  //   console.log("Role Data:", formData1);

  // };

    const form = useForm({
      resolver: zodResolver(FormSchema),
    });

    const form1 = useForm({
      resolver: zodResolver(FormSchema1),
    });


  // =====================================================
  // RENDER
  // =====================================================

  return (

    <Card breadcrumbdata={[
      { title: "Dashboard", link: "/" },
      { title: "Project Management", link: "/project-managemen" },
      { title: "Add new project", link: "" },
    ]}> 
      <div className="flex flex-wrap items-center gap-4 mb-5">
        <div className="flex-1">
          <h3 className="text-[32px] text-[#1b776f] font-medium  mb-2">Add new project</h3>
        </div>
      </div>

      <form className="flex flex-col gap-[24px]">

        <div className="grid grid-cols-2 gap-[24px] border border-[#D9D9D9] border-[1px] rounded-[16px] p-[16px]">
          <div className="col-span-2 flex flex-col gap-4 lg:flex-row lg:items-center">

            <Label
              className="lg:min-w-[160px] text-[20px] text-[#1b776f]"
            >
             Project Information
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
              Project Information <span className="text-[#EC221F]">*</span>
            </Label>


            <InputGroup merged>

              {/* <InputGroupText>

                <Icon icon="mdi:user" />

              </InputGroupText> */}


              <Input
                type="text"
                placeholder="Enter project name"
                id="roleName"
                className="bg-[#F5F5F5]"

              />

            </InputGroup>

          </div>


          {/* ================================================= */}
          {/* ROLE NAME */}
          {/* ================================================= */}

      <AlertDialog>
            <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">

              <Label
                htmlFor="role"
                className="lg:min-w-[160px]"
              >
                Client Name{" "}
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
                 <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">
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

                  </div>

                </div>

              </AlertDialogHeader>

              <AlertDialogFooter>

                <AlertDialogCancel className="bg-[#5A5A5A]">
                  Cancel
                </AlertDialogCancel>

                <Button className="bg-[#1A766D] hover:bg-[#1b776f]/80">
                  Add Account
                </Button>

              </AlertDialogFooter>

            </AlertDialogContent>
          </AlertDialog>



          {/* <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">

            <Label
              htmlFor="roleName"
              className="lg:min-w-[160px]"
            >
             Phone Number <span className="text-[#EC221F]">*</span>
            </Label>


            <InputGroup merged>


              <Input
                type="text"
                placeholder="Enter Mobile Number"
                id="roleName"
                className="bg-[#F5F5F5]"

              />

            </InputGroup>

          </div> */}
          {/* <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">

            <Label
              htmlFor="roleName"
              className="lg:min-w-[160px]"
            >
              Designation <span className="text-[#EC221F]">*</span>
            </Label>


            <InputGroup merged>


              <Input
                type="text"
                placeholder="Enter Designation"
                id="roleName"
                className="bg-[#F5F5F5]"

              />

            </InputGroup>

          </div> */}

          <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">
            <Label
              htmlFor="role"
              className="lg:min-w-[160px]"
            >
              Project Type <span className="text-[#EC221F]">*</span>
            </Label>

            <MultiSelect
              options={roles}
              value={selectedRoles}
              onChange={setSelectedRoles}
              // placeholder="Select..."
            />
          </div>
          <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">
            <Label
              htmlFor="role"
              className="lg:min-w-[160px]"
            >
              Project Description <span className="text-[#EC221F]">*</span>
            </Label>

           <Textarea
                type="text"
                placeholder="Write project description"
                id="roleName"
                className="bg-[#F5F5F5]"

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
             Project Scope
            </Label>

          </div>

         <AlertDialog>
            <div className="lg:col-span-2 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">

              <Label
                htmlFor="role"
                className="lg:min-w-[160px]"
              >
                Services{" "}
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
                 <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">
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

                  </div>

                </div>

              </AlertDialogHeader>

              <AlertDialogFooter>

                <AlertDialogCancel className="bg-[#5A5A5A]">
                  Cancel
                </AlertDialogCancel>

                <Button className="bg-[#1A766D] hover:bg-[#1b776f]/80">
                  Add Account
                </Button>

              </AlertDialogFooter>

            </AlertDialogContent>
          </AlertDialog>


        </div>
         <div className="grid grid-cols-2 gap-[24px] border border-[#D9D9D9] border-[1px] rounded-[16px] p-[16px]">
          <div className="col-span-2 flex flex-col gap-4 lg:flex-row lg:items-center">

            <Label
              className="lg:min-w-[160px] text-[20px] text-[#1b776f]"
            >
             Project Scope
            </Label>

          </div>

          <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">
            <Label
              htmlFor="role"
              className="lg:min-w-[160px]"
            >
              Project Timeline <span className="text-[#EC221F]">*</span>
            </Label>


                 <Form {...form}>
                   <form  className="space-y-8">
                     <FormField
                       control={form.control}
                       name="dob"
                       render={({ field }) => (
                         <FormItem className="flex flex-col">
                           <Popover>
                             <PopoverTrigger asChild>
                               <FormControl>
                                 <Button
                                   variant="outline"
                                   className={cn(
                                     "w-[100%] ltr:pl-3 rtl:pr-3 text-left font-normal border- border-[#D9D9D9] bg-[#F5F5F5]",
                                     !field.value && "text-muted-foreground"
                                   )}
                                 >
                                   {field.value ? (
                                     format(field.value, "PPP")
                                   ) : (
                                     <span>Pick a date</span>
                                   )}
                                   <CalendarIcon className="ltr:ml-auto rtl:mr-auto h-4 w-4 opacity-50" />
                                 </Button>
                               </FormControl>
                             </PopoverTrigger>
                             <PopoverContent className="w-auto p-0" align="start">
                               <Calendar
                                 mode="single"
                                 selected={field.value}
                                 onSelect={field.onChange}
                                 disabled={(date) =>
                                   date > new Date() || date < new Date("1900-01-01")
                                 }
                                 initialFocus
                               />
                             </PopoverContent>
                           </Popover>
                       
                           <FormMessage />
                         </FormItem>
                       )}
                     />
                   </form>
                 </Form>
          </div>
           <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">
            <Label
              htmlFor="role"
              className="lg:min-w-[160px]"
            >
              Expected Completion Date <span className="text-[#EC221F]">*</span>
            </Label>

                 <Form {...form1}>
                   <form  className="space-y-8">
                     <FormField
                       control={form1.control}
                       name="dob"
                       render={({ field }) => (
                         <FormItem className="flex flex-col">
                           <Popover>
                             <PopoverTrigger asChild>
                               <FormControl>
                                 <Button
                                   variant="outline"
                                   className={cn(
                                     "w-[100%] ltr:pl-3 rtl:pr-3 text-left font-normal border- border-[#D9D9D9] bg-[#F5F5F5]",
                                     !field.value && "text-muted-foreground"
                                   )}
                                 >
                                   {field.value ? (
                                     format(field.value, "PPP")
                                   ) : (
                                     <span>Pick a date</span>
                                   )}
                                   <CalendarIcon className="ltr:ml-auto rtl:mr-auto h-4 w-4 opacity-50" />
                                 </Button>
                               </FormControl>
                             </PopoverTrigger>
                             <PopoverContent className="w-auto p-0" align="start">
                               <Calendar
                                 mode="single"
                                 selected={field.value}
                                 onSelect={field.onChange}
                                 disabled={(date) =>
                                   date < new Date() || date < new Date("1900-01-01")
                                 }
                                 initialFocus
                               />
                             </PopoverContent>
                           </Popover>
                       
                           <FormMessage />
                         </FormItem>
                       )}
                     />
                   </form>
                 </Form>
          </div>


        </div>
        <div className="grid grid-cols-2 gap-[24px] border border-[#D9D9D9] border-[1px] rounded-[16px] p-[16px]">
          <div className="col-span-2 flex flex-col gap-4 lg:flex-row lg:items-center">

            <Label
              className="lg:min-w-[160px] text-[20px] text-[#1b776f]"
            >
              Billing & Payments
            </Label>

          </div>


          {/* ================================================= */}
          {/* ROLE NAME */}
          {/* ================================================= */}



          {/* ================================================= */}
          {/* ROLE NAME */}
          {/* ================================================= */}

      
          <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">
            <Label
              htmlFor="role"
              className="lg:min-w-[160px]"
            >
              Linked Billing Account <span className="text-[#EC221F]">*</span>
            </Label>

            <Select className=""> <SelectTrigger className="!bg-[#F5F5F5]"> <SelectValue placeholder="Select" /> </SelectTrigger> <SelectContent className=""> <SelectItem value="alberta">Alberta</SelectItem> <SelectItem value="british">British Columbia</SelectItem> <SelectItem value="manitoba">Manitoba</SelectItem> <SelectItem value="brunswick">New Brunswick</SelectItem> <SelectItem value="ontario">Ontario</SelectItem> </SelectContent> </Select>
          </div>
          <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">

            <Label
              htmlFor="roleName"
              className="lg:min-w-[160px]"
            >
              Project Amount <span className="text-[#EC221F]">*</span>
            </Label>


            <InputGroup merged>
                       <InputGroupText className="bg-[#F5F5F5]">
                         <Icon icon="bi:currency-rupee" />
                       </InputGroupText>
                       <Input type="text"  className="bg-[#F5F5F5]" id="hriFullName1" />
                     </InputGroup>

          </div>
          <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">

            <Label
              htmlFor="roleName"
              className="lg:min-w-[160px]"
            >
              Advance Amount <span className="text-[#EC221F]">*</span>
            </Label>


           <InputGroup merged>
                       <InputGroupText className="bg-[#F5F5F5]">
                         <Icon icon="bi:currency-rupee" />
                       </InputGroupText>
                       <Input type="text"  className="bg-[#F5F5F5]" id="hriFullName1" />
                     </InputGroup>

          </div>


          <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-left">
            <Label
              htmlFor="role"
              className="lg:min-w-[160px]"
            >
              Payment Terms <span className="text-[#EC221F]">*</span>
            </Label>

            <Select className=""> <SelectTrigger className="!bg-[#F5F5F5]"> <SelectValue placeholder="Select" /> </SelectTrigger> <SelectContent className=""> <SelectItem value="alberta">Alberta</SelectItem> <SelectItem value="british">British Columbia</SelectItem> <SelectItem value="manitoba">Manitoba</SelectItem> <SelectItem value="brunswick">New Brunswick</SelectItem> <SelectItem value="ontario">Ontario</SelectItem> </SelectContent> </Select>
          </div>
       



     











        </div>
      

        <div className=" mt-[12px]  gap-4">
          <div className="block">
            <Label
              className="lg:min-w-[160px] text-[16px] text-[#1E1E1E]"
            >
             Project Status
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
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
              >
                Add Project
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-w-[800px] max-h-[90vh] overflow-y-auto">
              <AlertDialogHeader>
                <div className="">
                 <h3 className="text-[24px] font-medium text-[#1b776f]  mb-[32px]">Confirm New Project</h3>
                <div className="border border-[#D9D9D9] rounded-[16px] p-[16px]">
                  <h4 className="text-[20px] text-[#1A766D] font-[500] mb-[24px]">Project Information</h4>
                  <div className="grid grid-cols-2 gap-[24px]">
                    <div className="lg:col-span-1 col-span-2">
                      <h4 className="text-[16px] text-[#757575]">Project Name</h4>
                      <h3 className="text-[#1E1E1E] text-[20px]">jhone doe</h3>
                    </div>
                    <div className="lg:col-span-1 col-span-2">
                      <h4 className="text-[16px] text-[#757575]">Client Name</h4>
                            <div className="flex gap-3 mt-[8px]">

                                <h3 className="text-[#1E1E1E] bg-[#fff] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#D9D9D9]">Admin</h3>
                               </div>
                    </div>
                    <div className="lg:col-span-1 col-span-2">
                      <h4 className="text-[16px] text-[#757575]">Project Type</h4>
                      <div className="flex gap-3 mt-[8px]">

                                <h3 className="text-[#1E1E1E] bg-[#fff] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#D9D9D9]">Website</h3>
                               </div>
                    </div>
                    <div className="lg:col-span-1 col-span-2">
                      <h4 className="text-[16px] text-[#757575]">Project Type</h4>
                      <h3 className="text-[#1E1E1E] text-[20px]">Build a landing page for a bookstore</h3>
                    </div>
                   
                   
                  </div>

                  {/* <h2 className="text-[20px] text-[#1A766D] font-[500] mt-[32px] mb-0">Permissions </h2> */}


                </div>
                <div className="border border-[#D9D9D9] rounded-[16px] p-[16px] mt-[16px]">
                  <h4 className="text-[20px] text-[#1A766D] font-[500] mb-[24px]">Project Scope</h4>
                  <div className="grid grid-cols-2 gap-[24px]">
                  
                    <div className="lg:col-span-1 col-span-2">
                      <h4 className="text-[16px] text-[#757575]">Services</h4>
                            <div className="flex gap-3 mt-[8px]">

                                <h3 className="text-[#1E1E1E] bg-[#fff] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#D9D9D9]">Website Design</h3>
                                <h3 className="text-[#1E1E1E] bg-[#fff] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#D9D9D9]">Seo</h3>
                               </div>
                    </div>
                   
                   
                   
                  </div>

                  {/* <h2 className="text-[20px] text-[#1A766D] font-[500] mt-[32px] mb-0">Permissions </h2> */}


                </div>
                <div className="border border-[#D9D9D9] rounded-[16px] p-[16px] mt-[16px]">
                  <h4 className="text-[20px] text-[#1A766D] font-[500] mb-[24px]">Project Timeline</h4>
                  <div className="grid grid-cols-2 gap-[24px]">
                    <div className="lg:col-span-1 col-span-2">
                      <h4 className="text-[16px] text-[#757575]">Start Date</h4>
                      <h3 className="text-[#1E1E1E] text-[20px]">29-09-2026</h3>
                    </div>
                    <div className="lg:col-span-1 col-span-2">
                      <h4 className="text-[16px] text-[#757575]">Expected Completion Date</h4>
                      <h3 className="text-[#1E1E1E] text-[20px]">29-09-2026</h3>
                    </div>
                  
                   
                  </div>

                </div>
                 <div className="border border-[#D9D9D9] rounded-[16px] p-[16px] mt-[16px]">
                  <h4 className="text-[20px] text-[#1A766D] font-[500] mb-[24px]">Billing & Payments</h4>
                  <div className="grid grid-cols-2 gap-[24px]">
                    <div className="lg:col-span-1 col-span-2">
                      <h4 className="text-[16px] text-[#757575]">Linked Billing Account</h4>
                        <div className="flex gap-3 mt-[8px]">

                                <h3 className="text-[#1E1E1E] bg-[#fff] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#D9D9D9]">account1</h3>
                               </div>
                    </div>
                    <div className="lg:col-span-1 col-span-2">
                      <h4 className="text-[16px] text-[#757575]">Project Amount</h4>
                      <h3 className="text-[#1E1E1E] text-[20px]">₹ 50,000</h3>
                    </div>
                    <div className="lg:col-span-1 col-span-2">
                      <h4 className="text-[16px] text-[#757575]">Advance Amount</h4>
                      <h3 className="text-[#1E1E1E] text-[20px]">₹ 10,000</h3>
                    </div>
                    <div className="lg:col-span-1 col-span-2">
                      <h4 className="text-[16px] text-[#757575]">Payment Terms</h4>
                        <div className="flex gap-3 mt-[8px]">

                                <h3 className="text-[#1E1E1E] bg-[#fff] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#D9D9D9]">Term1</h3>
                               </div>
                    </div>
                  
                   
                  </div>

                </div>
              
              
                <div className="border border-[#D9D9D9] rounded-[16px] p-[16px] mt-[16px]">
                  <h4 className="text-[16px] text-[#1E1E1E] font-[500] mb-[24px]">Project Status</h4>
                  <div className="grid grid-cols-2 gap-[24px]">
                    <div className="lg:col-span-1 col-span-2">
                      <Switch size="lg" id="s2" />
                    </div>
                 
                   
                  </div>

                


                </div>
             
                </div>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-[#5A5A5A]">
                  Go back and Edit
                </AlertDialogCancel>
                <a href="/project-management" className="inline-flex items-center justify-center rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-0 disabled:opacity-50 whitespace-nowrap disabled:pointer-events-none cursor-pointer text-primary-foreground hover:bg-[#1b776f]/80 h-10 px-4 py-[10px] bg-[#1A766D]">
                  Confirm and Add Project
                </a>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

        </div>

      </form>



    </Card>

  );
}