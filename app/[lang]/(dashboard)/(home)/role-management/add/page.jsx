"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

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

    <Card title="Add Role">

      <form onSubmit={handleSubmit}>

        <div className="grid grid-cols-2 gap-4 w-[60%]">


          {/* ================================================= */}
          {/* ROLE NAME */}
          {/* ================================================= */}

          <div className="col-span-2 flex flex-col gap-2 lg:flex-row lg:items-center">

            <Label
              htmlFor="roleName"
              className="lg:min-w-[160px]"
            >
              Role Name
            </Label>


            <InputGroup merged>

              <InputGroupText>

                <Icon icon="mdi:user" />

              </InputGroupText>


              <Input
                type="text"
                placeholder="Enter role name"
                id="roleName"
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

          <div className="col-span-2 flex flex-col gap-2 lg:flex-row lg:items-start">

            <Label
              htmlFor="description"
              className="lg:min-w-[160px] lg:pt-2"
            >
              Description
            </Label>


            <InputGroup merged>

              <InputGroupText>

                <Icon
                  icon="material-symbols-light:description-rounded"
                />

              </InputGroupText>


              <Textarea
                id="description"
                placeholder="Enter role description"
                className="border-l-0 rounded-none px-l-none py-[9px] text-xs"
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

          <div className="col-span-2 flex flex-col gap-2 lg:flex-row lg:items-center">

            <Label
              className="lg:min-w-[160px] text-[18px] text-[#1b776f]"
            >
              Permissions
            </Label>

          </div>



          {/* ================================================= */}
          {/* MODULE PERMISSIONS */}
          {/* ================================================= */}

          {modules.map((module) => (

            <div
              key={module.id}
              className="col-span-2 flex flex-col gap-2 lg:flex-row lg:items-center"
            >

              {/* --------------------------------------------- */}
              {/* MODULE NAME */}
              {/* --------------------------------------------- */}

              <Label
                className={
                  module.name.length > 20
                    ? "lg:max-w-[160px] leading-[18px]"
                    : "lg:min-w-[160px]"
                }
              >
                {module.name}
              </Label>



              {/* --------------------------------------------- */}
              {/* PERMISSIONS */}
              {/* --------------------------------------------- */}

              <div className="flex flex-wrap gap-4">


                {/* ========================================= */}
                {/* VIEW */}
                {/* ========================================= */}

                <div className="flex lg:items-center gap-1.5">

                  <Checkbox
                    id={`${module.id}-view`}
                    size="sm"
                    color="default"
                    checked={
                      permissions[module.id].view
                    }
                    onCheckedChange={() =>
                      handlePermissionChange(
                        module.id,
                        "view"
                      )
                    }
                  />

                  <Label
                    htmlFor={`${module.id}-view`}
                    className="text-base text-muted-foreground font-normal"
                  >
                    View
                  </Label>

                </div>



                {/* ========================================= */}
                {/* ADD */}
                {/* ========================================= */}

                <div className="flex lg:items-center gap-1.5">

                  <Checkbox
                    id={`${module.id}-add`}
                    size="sm"
                    color="default"
                    checked={
                      permissions[module.id].add
                    }
                    onCheckedChange={() =>
                      handlePermissionChange(
                        module.id,
                        "add"
                      )
                    }
                  />

                  <Label
                    htmlFor={`${module.id}-add`}
                    className="text-base text-muted-foreground font-normal"
                  >
                    Add
                  </Label>

                </div>



                {/* ========================================= */}
                {/* EDIT */}
                {/* ========================================= */}

                <div className="flex lg:items-center gap-1.5">

                  <Checkbox
                    id={`${module.id}-edit`}
                    size="sm"
                    color="default"
                    checked={
                      permissions[module.id].edit
                    }
                    onCheckedChange={() =>
                      handlePermissionChange(
                        module.id,
                        "edit"
                      )
                    }
                  />

                  <Label
                    htmlFor={`${module.id}-edit`}
                    className="text-base text-muted-foreground font-normal"
                  >
                    Edit
                  </Label>

                </div>



                {/* ========================================= */}
                {/* DELETE */}
                {/* ========================================= */}

                <div className="flex lg:items-center gap-1.5">

                  <Checkbox
                    id={`${module.id}-delete`}
                    size="sm"
                    color="default"
                    checked={
                      permissions[module.id].delete
                    }
                    onCheckedChange={() =>
                      handlePermissionChange(
                        module.id,
                        "delete"
                      )
                    }
                  />

                  <Label
                    htmlFor={`${module.id}-delete`}
                    className="text-base text-muted-foreground font-normal"
                  >
                    Delete
                  </Label>

                </div>



                {/* ========================================= */}
                {/* SELECT ALL */}
                {/* ========================================= */}

                <div className="flex lg:items-center gap-1.5">

                  <Checkbox
                    id={`${module.id}-select-all`}
                    size="sm"
                    color="default"
                    checked={isSelectAllChecked(
                      module.id
                    )}
                    onCheckedChange={() =>
                      handleSelectAll(
                        module.id
                      )
                    }
                  />

                  <Label
                    htmlFor={`${module.id}-select-all`}
                    className="text-base text-muted-foreground font-normal"
                  >
                    Select All
                  </Label>

                </div>

              </div>

            </div>

          ))}



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