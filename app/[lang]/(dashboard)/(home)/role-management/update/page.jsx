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
          { title: "Update Role", link: "" },
        ]}>
           <div className="flex flex-wrap items-center gap-4 mb-5">
              <div className="flex-1">
                <h3 className="text-[32px] text-[#1b776f] font-medium  mb-2">Update Role</h3>
              </div>
          </div>

      <form onSubmit={handleSubmit}>

        <div className="grid grid-cols-2 gap-4 ">
          
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

          <div className="col-span-1 flex flex-col gap-2 lg:flex-col lg:items-left">

            <Label
              htmlFor="roleName"
              className="lg:min-w-[160px]"
            >
              Role Name
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

          <div className="col-span-1 flex flex-col gap-2 lg:flex-col lg:items-start">

            <Label
              htmlFor="description"
              className="lg:min-w-[160px] lg:pt-2"
            >
              Description
            </Label>


            <InputGroup merged>

              {/* <InputGroupText>

                <Icon
                  icon="material-symbols-light:description-rounded"
                />

              </InputGroupText> */}


              <Textarea
                id="description"
                placeholder="Enter role description"
                className=" py-[9px] text-xs bg-[#F5F5F5]"
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
              />

            </InputGroup>

          </div>



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
      className="col-span-2 flex flex-col gap-3"
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



          {/* ================================================= */}
          {/* SUBMIT */}
          {/* ================================================= */}

          <div className="col-span-2 flex gap-3">

            <Button className="bg-[#5A5A5A]" type="submit">
              Discard
            </Button>
            <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                          >
                            Submit
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <h3 className="text-xl font-medium text-[#1b776f]  mb-[32px]">Confirm New Role </h3>
                            <div>
                              <div className="">
                                <h4 className="text-[16px] text-[#757575]">Role Name:</h4>
                                <h3 className="text-[#1E1E1E] text-[20px]">sacsacavadvdsv</h3>
                              </div>
                              <div className="mt-[24px]">
                                <h4 className="text-[16px] text-[#757575]">Role Description:</h4>
                                <h3 className="text-[#1E1E1E] text-[20px]">asvdavnj dsv sj bs dvbjd v sdv kaaev fwevdsvsdf</h3>
                              </div>

                              <h2 className="text-[20px] text-[#1A766D] font-[500] mt-[32px] mb-0">Permissions </h2>
                               <div className="mt-[24px]">
                                <h4 className="text-[16px] text-[#757575] mb-0">User Management Perimissions:</h4>
                                <h3 className="text-[#1E1E1E] flex gap-4 text-[20px]">
                                  <span>View</span>
                                  <span>Add</span>
                                  <span>Edit</span>
                                  <span>Delete</span>
                                  </h3>
                              </div>
                               <div className="mt-[20px]">
                                <h4 className="text-[16px] text-[#757575] mb-0">Billing Management Perimissions:</h4>
                                <h3 className="text-[#1E1E1E] flex gap-4 text-[20px]">
                                  <span>View</span>
                                  <span>Add</span>
                                  <span>Edit</span>
                                  <span>Delete</span>
                                  </h3>
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


        </div>

      </form>


    </Card>

  );
}