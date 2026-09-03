"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
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


// =====================================================
// MODULES
// =====================================================

const modules = [
  {
    id: "userManagement",
    name: "User Management",
  },
  {
    id: "billingManagement",
    name: "Billing Management",
  },
  {
    id: "clientManagement",
    name: "Client Management",
  },
  {
    id: "projectManagement",
    name: "Project Management",
  },
  {
    id: "serviceCategoryMaster",
    name: "Service Category & Service Master",
  },
  {
    id: "clientProjectOnboarding",
    name: "Client Project Onboarding",
  },
  {
    id: "clientConfirmation",
    name: "Client Confirmation",
  },
  {
    id: "otpVerification",
    name: "OTP Verification",
  },
  {
    id: "agreementGeneration",
    name: "Agreement Generation & Document Storage",
  },
];


// =====================================================
// DEFAULT PERMISSIONS
// =====================================================

const createDefaultPermissions = () => {
  const permissions = {};

  modules.forEach((module) => {
    permissions[module.id] = {
      view: false,
      add: false,
      edit: false,
      delete: false,
    };
  });

  return permissions;
};


// =====================================================
// PAGE
// =====================================================

export default function Page() {

  // ---------------------------------------------------
  // FORM STATE
  // ---------------------------------------------------

  const [roleName, setRoleName] = useState("");
  const [description, setDescription] = useState("");


  // ---------------------------------------------------
  // PERMISSIONS STATE
  // ---------------------------------------------------

  const [permissions, setPermissions] = useState(
    createDefaultPermissions()
  );


  // =====================================================
  // HANDLE SINGLE PERMISSION
  // =====================================================

  const handlePermissionChange = (
    moduleId,
    permission
  ) => {

    setPermissions((prev) => ({
      ...prev,

      [moduleId]: {
        ...prev[moduleId],

        [permission]: !prev[moduleId][permission],
      },
    }));

  };


  // =====================================================
  // HANDLE SELECT ALL
  // =====================================================

  const handleSelectAll = (moduleId) => {

    const currentPermissions =
      permissions[moduleId];

    const allSelected =
      Object.values(currentPermissions).every(Boolean);

    setPermissions((prev) => ({
      ...prev,

      [moduleId]: {
        view: !allSelected,
        add: !allSelected,
        edit: !allSelected,
        delete: !allSelected,
      },
    }));

  };


  // =====================================================
  // CHECK SELECT ALL
  // =====================================================

  const isSelectAllChecked = (moduleId) => {

    return Object.values(
      permissions[moduleId]
    ).every(Boolean);

  };


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

    <Card   breadcrumbdata={[
          { title: "Dashboard", link: "/" },
          { title: "Role Management", link: "/role-management" },
          { title: "Add Role", link: "/role-management/add" },
        ]}>
           <div className="flex flex-wrap items-center gap-4 mb-5">
              <div className="flex-1">
                <h3 className="text-[32px] text-[#1b776f] font-medium  mb-2">Add Role</h3>
              </div>
          </div>

      <form onSubmit={handleSubmit}  className="flex flex-col gap-[16px]">

        <div className="grid grid-cols-2 gap-[24px] border border-[#D9D9D9] border-[1px] rounded-[16px] p-[16px] ">
          
          <div className="col-span-2 flex flex-col gap-2 lg:flex-row lg:items-center">

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
              Role Name <span className="text-[#EC221F]">*</span>
            </Label>


            <InputGroup merged>

              {/* <InputGroupText>

                <Icon icon="mdi:user" />

              </InputGroupText> */}


              <Input
                type="text"
                placeholder="Enter role name"
                id="roleName"
                 className="bg-[#F5F5F5]"
                value={roleName}
                onChange={(e) =>
                  setRoleName(e.target.value)
                }
              />

            </InputGroup>

          </div>



          {/* ================================================= */}
          {/* DESCRIPTION */}
          {/* ================================================= */}

          <div className="lg:col-span-1 col-span-2 flex flex-col gap-2 lg:flex-col lg:items-start">

            <Label
              htmlFor="description"
              className="lg:min-w-[160px] "
            >
              Description <span className="text-[#EC221F]">*</span>
            </Label>


            <InputGroup merged>

              {/* <InputGroupText>

                <Icon
                  icon="material-symbols-light:description-rounded"
                />

              </InputGroupText> */}


              <Input
                id="description"
                placeholder="This role has all access and permissions "
                className=" bg-[#F5F5F5]"
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
              />

            </InputGroup>

          </div>
          </div>
          <div className="grid grid-cols-2 gap-[24px] border border-[#D9D9D9] border-[1px] rounded-[16px] p-[16px] ">


        



          {/* ================================================= */}
          {/* PERMISSION TITLE */}
          {/* ================================================= */}

          <div className="col-span-2 flex flex-col gap-4 lg:flex-row lg:items-center">

            <Label
              className="lg:min-w-[160px] text-[20px] text-[#1b776f]"
            >
              Permissions
            </Label>

          </div>



          {/* ================================================= */}
          {/* MODULE PERMISSIONS */}
          {/* ================================================= */}

       {modules.map((module) => {
  const modulePermission = permissions[module.id] || {
    view: false,
    add: false,
    edit: false,
    delete: false,
  };

  return (
    <div
      key={module.id}
      className="lg:col-span-1 col-span-2 flex flex-col gap-3"
    >
      {/* MODULE NAME */}
      <Label
        className="text-[16px] font-medium text-foreground"
      >
        {module.name}
      </Label>

      {/* PERMISSIONS */}
      <div className="flex flex-wrap gap-3">

        {/* VIEW */}
        <div
          className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
            modulePermission.view
              ? "bg-teal-50"
              : "bg-muted/60"
          }`}
        >
          <Checkbox
            id={`${module.id}-view`}
            size="sm"
            color="default"
            checked={modulePermission.view}
            onCheckedChange={() =>
              handlePermissionChange(module.id, "view")
            }
            className={
              modulePermission.view
                ? "border-teal-600 bg-teal-600 text-white"
                : ""
            }
          />

          <Label
            htmlFor={`${module.id}-view`}
            className={`cursor-pointer text-[16px] font-normal ${
              modulePermission.view
                ? "text-teal-700"
                : "text-foreground"
            }`}
          >
            View
          </Label>
        </div>


        {/* ADD */}
        <div
          className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
            modulePermission.add
              ? "bg-teal-50"
              : "bg-muted/60"
          }`}
        >
          <Checkbox
            id={`${module.id}-add`}
            size="sm"
            color="default"
            checked={modulePermission.add}
            onCheckedChange={() =>
              handlePermissionChange(module.id, "add")
            }
            className={
              modulePermission.add
                ? "border-teal-600 bg-teal-600 text-white"
                : ""
            }
          />

          <Label
            htmlFor={`${module.id}-add`}
            className={`cursor-pointer text-[16px] font-normal ${
              modulePermission.add
                ? "text-teal-700"
                : "text-foreground"
            }`}
          >
            Add
          </Label>
        </div>


        {/* EDIT */}
        <div
          className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
            modulePermission.edit
              ? "bg-teal-50"
              : "bg-muted/60"
          }`}
        >
          <Checkbox
            id={`${module.id}-edit`}
            size="sm"
            color="default"
            checked={modulePermission.edit}
            onCheckedChange={() =>
              handlePermissionChange(module.id, "edit")
            }
            className={
              modulePermission.edit
                ? "border-teal-600 bg-teal-600 text-white"
                : ""
            }
          />

          <Label
            htmlFor={`${module.id}-edit`}
            className={`cursor-pointer text-[16px] font-normal ${
              modulePermission.edit
                ? "text-teal-700"
                : "text-foreground"
            }`}
          >
            Edit
          </Label>
        </div>


        {/* DELETE */}
        <div
          className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
            modulePermission.delete
              ? "bg-teal-50"
              : "bg-muted/60"
          }`}
        >
          <Checkbox
            id={`${module.id}-delete`}
            size="sm"
            color="default"
            checked={modulePermission.delete}
            onCheckedChange={() =>
              handlePermissionChange(module.id, "delete")
            }
            className={
              modulePermission.delete
                ? "border-teal-600 bg-teal-600 text-white"
                : ""
            }
          />

          <Label
            htmlFor={`${module.id}-delete`}
            className={`cursor-pointer text-[16px] font-normal ${
              modulePermission.delete
                ? "text-teal-700"
                : "text-foreground"
            }`}
          >
            Delete
          </Label>
        </div>


        {/* SELECT ALL */}
        <div
          className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all ${
            isSelectAllChecked(module.id)
              ? "bg-teal-50"
              : "bg-muted/60"
          }`}
        >
          <Checkbox
            id={`${module.id}-select-all`}
            size="sm"
            color="default"
            checked={isSelectAllChecked(module.id)}
            onCheckedChange={() =>
              handleSelectAll(module.id)
            }
            className={
              isSelectAllChecked(module.id)
                ? "border-teal-600 bg-teal-600 text-white"
                : ""
            }
          />

          <Label
            htmlFor={`${module.id}-select-all`}
            className={`cursor-pointer text-[16px] font-normal ${
              isSelectAllChecked(module.id)
                ? "text-teal-700"
                : "text-foreground"
            }`}
          >
            Select All
          </Label>
        </div>

      </div>
    </div>
  );
})}
   <div className="col-span-2 flex items-center gap-1.5 ">
              <Checkbox id="term6" size="sm" color="default" />
              <Label
                htmlFor="term6"
                className="text-base text-muted-foreground font-normal"
              >
                Select all permissions
              </Label>
            </div>



          {/* ================================================= */}
          {/* SUBMIT */}
          {/* ================================================= */}

          


        </div>
        <div className="col-span-2 flex gap-3 mt-[32px]">

            <Button className="bg-[#5A5A5A]" type="submit">
              Discard
            </Button>
            <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                          >
                            Add Role
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="max-w-[800px] max-h-[90vh] overflow-y-auto">
                            <AlertDialogHeader >
                                                               <div className="">
                                                                  <div className="flex justify-between nx-items-center">
                                               
                                                                         <h3 className="text-[24px] font-medium text-[#1b776f]  mb-[32px]">Confirm New Role  </h3>
                                                                         <AlertDialogCancel className="bg-transparent hover:bg-transparent">
                                                                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                             <path d="M18 6L6 18M6 6L18 18" stroke="#383838" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                           </svg>
                                                                         </AlertDialogCancel>
                                                                       </div>
                                                               <div className="border border-[#D9D9D9] rounded-[16px] p-[16px]">
                                                                 <h4 className="text-[20px] text-[#1A766D] font-[500] mb-[24px]">Basic Information</h4>
                                                                 <div className="grid grid-cols-2 gap-[24px]">
                                                                   <div className="lg:col-span-1 col-span-2">
                                                                     <h4 className="text-[16px] text-[#757575]">Role Name:</h4>
                                                                     <h3 className="text-[#1E1E1E] text-[20px]">sd,nsdfk</h3>
                                                                   </div>
                                                                   <div className="lg:col-span-1 col-span-2">
                                                                     <h4 className="text-[16px] text-[#757575]">Role Description:</h4>
                                                                     <h3 className="text-[#1E1E1E] text-[20px]">Lasvdavnj dsv sj bs dvbjd v sdvk aaevfwevdsvsdf</h3>
                                                                   </div>
                                                                
                                                                  
                                                                 </div>
                                               
                                                                 {/* <h2 className="text-[20px] text-[#1A766D] font-[500] mt-[32px] mb-0">Permissions </h2> */}
                                               
                                               
                                                               </div>
                                                               
                                               
                                                                
                                                               <div className="border border-[#D9D9D9] rounded-[16px] p-[16px] mt-[16px]">
                                                                 <h4 className="text-[20px] text-[#1A766D] font-[500] mb-[24px]">Permissions</h4>
                                                                 <div className="grid grid-cols-2 gap-[24px]">
                                                               
                                                                    <div className="lg:col-span-1 col-span-2">
                                                                         <h4 className="text-[16px] text-[#757575] mb-[8px]">User Management</h4>
                                                                         <div className="flex gap-2">
                                                                         <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">View</h3>
                                                                         <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Add</h3>
                                                                         <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Edit</h3>
                                                                         <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Delete</h3>
                       
                                                                         </div>
                                                                     </div> 
                                                                      <div className="lg:col-span-1 col-span-2">
                                                                         <h4 className="text-[16px] text-[#757575] mb-[8px]">Billing Management</h4>
                                                                         <div className="flex gap-2">
                                                                         <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">View</h3>
                                                                         <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Add</h3>
                                                                         <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Edit</h3>
                                                                         <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Delete</h3>
                       
                                                                         </div>
                                                                     </div> 
                                                                      <div className="lg:col-span-1 col-span-2">
                                                                         <h4 className="text-[16px] text-[#757575] mb-[8px]">Client Management</h4>
                                                                         <div className="flex gap-2">
                                                                         <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">View</h3>
                                                                         <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Add</h3>
                                                                         <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Edit</h3>
                                                                        
                                                                         </div>
                                                                     </div> 
                                                                      <div className="lg:col-span-1 col-span-2">
                                                                         <h4 className="text-[16px] text-[#757575] mb-[8px]">Project Management</h4>
                                                                         <div className="flex gap-2">
                                                                         <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">View</h3>
                                                                         <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Add</h3>
                                                                         <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Edit</h3>
                                                                         <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Delete</h3>
                       
                                                                         </div>
                                                                     </div>  
                                                                      <div className="lg:col-span-1 col-span-2">
                                                                         <h4 className="text-[16px] text-[#757575] mb-[8px]">Service Category & Service Master</h4>
                                                                         <div className="flex gap-2">
                                                                         <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">View</h3>
                                                                         <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Edit</h3>
                                                                         <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Delete</h3>
                       
                                                                         </div>
                                                                     </div> 
                                                                      <div className="lg:col-span-1 col-span-2">
                                                                         <h4 className="text-[16px] text-[#757575] mb-[8px]">Client Project Onboarding</h4>
                                                                         <div className="flex gap-2">
                                                                         <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">View</h3>
                                                                         <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Add</h3>
                                                                         <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Edit</h3>
                                                                         <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Delete</h3>
                       
                                                                         </div>
                                                                     </div> 
                                                                      <div className="lg:col-span-1 col-span-2">
                                                                         <h4 className="text-[16px] text-[#757575] mb-[8px]">Client Confirmation</h4>
                                                                         <div className="flex gap-2">
                                                                         <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">View</h3>
                                                                         <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Add</h3>
                                                                        
                                                                         </div>
                                                                     </div> 
                                                                      <div className="lg:col-span-1 col-span-2">
                                                                         <h4 className="text-[16px] text-[#757575] mb-[8px]">OTP Verification</h4>
                                                                         <div className="flex gap-2">
                                                                         <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">View</h3>
                                                                         <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Add</h3>
                                                                        
                                                                         </div>
                                                                     </div> 
                                                                      <div className="lg:col-span-1 col-span-2">
                                                                         <h4 className="text-[16px] text-[#757575] mb-[8px]">Agreement Generation & Document Storage</h4>
                                                                         <div className="flex gap-2">
                                                                          <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Edit</h3>
                                                                         <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Delete</h3>
                       
                                                                         </div>
                                                                     </div> 
                                                                      
                                                                  
                                                                 </div>
                                               
                                                                 {/* <h2 className="text-[20px] text-[#1A766D] font-[500] mt-[32px] mb-0">Permissions </h2> */}
                                               
                                               
                                                               </div>
                                                                  <div className="col-span-2 flex lg:items-center gap-1.5  mt-5">
              <Checkbox id="term6" size="sm" color="default" />
              <Label
                htmlFor="term6"
                className="text-base text-muted-foreground font-normal"
              >
                Select all permissions
              </Label>
            </div>
                                                             
                                                            
                                                               </div>
                                                             </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel  className="bg-[#5A5A5A]">
                              Go back and Edit
                            </AlertDialogCancel>
                            <a href="/role-management" className="inline-flex items-center justify-center rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-0 disabled:opacity-50 whitespace-nowrap disabled:pointer-events-none cursor-pointer text-primary-foreground hover:bg-[#1b776f]/80 h-10 px-4 py-[10px] bg-[#1A766D]">
                              Confirm and Add Role
                            </a>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>

          </div>

      </form>


    </Card>

  );
}