"use client";

import Card from "@/components/ui/card-snippet";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Checkbox } from "@/components/ui/checkbox";

import { Label } from "@/components/ui/label";
import { clientsData } from "@/app/[lang]/(dashboard)/(tables)/tailwindui-table/data";
import { Icon } from "@iconify/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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

const Userlist = () => {
  return (
    <div className=" space-y-6">
      <Card breadcrumbdata={[
        { title: "Dashboard", link: "/" },
        { title: "Client Management", link: "/client-management" },
        // { title: "Add Role", link: "/role-management/add" },
      ]}>
        <div className="flex flex-wrap items-center gap-4 mb-5">
          <div className="flex-1">
            <h3 className="text-3xl font-medium text-[#1b776f] mb-0">Client Management</h3>
          </div>
          <div className="flex-none">
            <a href="/client-management/add" class="inline-flex items-center justify-center rounded-md text-[16px] font-semibold ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-0 disabled:opacity-50 whitespace-nowrap disabled:pointer-events-none cursor-pointer bg-[#1b776f] text-primary-foreground hover:bg-[#1b776f]/80 h-10 px-4 py-[10px]" ><svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M12 5V19" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>Add New Client</a>
          </div>
        </div>

        {/* <Card className="overflow-x-auto"> */}
       <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">
                 <div className="max-w-[500px] truncate  ">
                  
                Sr No.
                 </div>
              </TableHead>

              <TableHead className="font-semibold">
                Client Name
              </TableHead>

              <TableHead className="font-semibold">
                Email Address
              </TableHead>

              <TableHead className="font-semibold">
                Mobile Number
              </TableHead>

              <TableHead className="font-semibold">
                Designation
              </TableHead>

              <TableHead className="font-semibold">
                 <div className="max-w-[500px] truncate  ">
                  
                Linked Billing Accounts
                 </div>
              </TableHead>

              <TableHead className="font-semibold">
                Role Type
              </TableHead>

              <TableHead className="font-semibold">
                Status
              </TableHead>

              <TableHead className="font-semibold text-left">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {clientsData.map((item, index) => (
              <TableRow
                key={item.id}
                className="hover:bg-muted"
              >
                {/* Sr No */}
                <TableCell>
                   <div className="max-w-[500px] truncate  ">

                  {index + 1}
                   </div>
                </TableCell>

                {/* Client Name */}
                <TableCell className="font-medium">
                  <div className="max-w-[500px] truncate  ">
                  {item.clientName}
                    
                  </div>
                </TableCell>

                {/* Email */}
                <TableCell>
                  {item.emailAddress}
                </TableCell>

                {/* Mobile */}
                <TableCell>
                  <div className="max-w-[500px] truncate  ">
                  {/* {item.clientName} */}
                  {item.mobileNumber}
                    
                  </div>
                </TableCell>

                {/* Designation */}
                <TableCell>
                  <div className="max-w-[500px] truncate  ">
                  {/* {item.clientName} */}
                  {item.designation}
                    
                  </div>
                </TableCell>

                {/* Billing Accounts */}
                <TableCell>
                  <div className="flex flex-wrap gap-1 ">
                    {item.linkedBillingAccounts.map((account) => (
                      <span
                        key={account}
                        className="rounded-full bg-[#F2F2F2] px-2 py-1 text-xs text-[#555]"
                      >
                        {account}
                      </span>
                    ))}
                  </div>
                </TableCell>

                {/* Role Type */}
                <TableCell>
                   <div className="max-w-[500px] truncate  ">
                    
                  <span className="inline-flex rounded-full bg-[#E8FFFB] px-3 py-1.5 text-sm text-[#1A766D]">
                    {item.roleType}
                  </span>
                  </div>
                </TableCell>

                {/* Status */}
                <TableCell>
                  <Switch
                    id={`status-${item.id}`}
                    defaultChecked={item.status}
                  />
                </TableCell>

                {/* Actions */}
                <TableCell>
                  <div className="flex gap-3">

                    {/* Edit */}
                    <a
                      href={`/client-management/update`}
                      className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[#1A766D] bg-white text-[#1A766D] transition-colors hover:bg-[#1A766D] hover:text-white"
                    >
                      <Icon
                        icon="heroicons:pencil"
                        className="h-4 w-4"
                      />
                    </a>

                    {/* View */}
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-7 w-7 border border-[#1A766D] bg-white text-[#1A766D]"
                        >
                          <Icon
                            icon="heroicons:eye"
                            className="h-4 w-4"
                          />
                        </Button>
                      </AlertDialogTrigger>

                      <AlertDialogContent className="max-w-[800px] max-h-[90vh] overflow-y-auto">
                        <AlertDialogHeader>

                          <div className="flex items-center justify-between">
                            <h3 className="mb-6 text-[24px] font-medium text-[#1B776F]">
                              Client
                            </h3>

                            <AlertDialogCancel className="border-0 bg-transparent hover:bg-transparent">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M18 6L6 18M6 6L18 18" stroke="#383838" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                            </AlertDialogCancel>
                          </div>

                          {/* Client Information */}
                            <div className="border border-[#D9D9D9] rounded-[16px] p-[16px]">
                                            <h4 className="text-[20px] text-[#1A766D] font-[500] mb-[24px]">Basic Information</h4>
                                            <div className="grid grid-cols-2 gap-[24px]">
                                              <div className="lg:col-span-1 col-span-2">
                                                <h4 className="text-[16px] text-[#757575]">Full Name:</h4>
                                                <h3 className="text-[#1E1E1E] text-[20px]">jhone doe</h3>
                                              </div>
                                              <div className="lg:col-span-1 col-span-2">
                                                <h4 className="text-[16px] text-[#757575]">Email Address:</h4>
                                                <h3 className="text-[#1E1E1E] text-[20px]">abc@gmail.com</h3>
                                              </div>
                                              <div className="lg:col-span-1 col-span-2">
                                                <h4 className="text-[16px] text-[#757575]">Phone Number:</h4>
                                                <h3 className="text-[#1E1E1E] text-[20px]">GSTIN 29ABCDE1234F2Z5</h3>
                                              </div>
                                              <div className="lg:col-span-1 col-span-2">
                                                <h4 className="text-[16px] text-[#757575]">Designation:</h4>
                                                <h3 className="text-[#1E1E1E] text-[20px]">Manager</h3>
                                              </div>
                                               <div className="lg:col-span-1 col-span-2">
                                                          <h4 className="text-[16px] text-[#757575]">Role</h4>
                                                                            <div className="flex gap-3 mt-[8px]">
                          
                                                          <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Admin</h3>
                                                          {/* <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Account2</h3> */}
                                                          </div>
                                                         </div>  
                                                         <div className="lg:col-span-1 col-span-2">
                                                          <h4 className="text-[16px] text-[#757575]">Linked Billing Accounts</h4>
                                                          <div className="flex gap-3 mt-[8px]">
                          
                                                          <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Account1</h3>
                                                          <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Account2</h3>
                                                          </div>
                                                        </div>  
                                             
                                            </div>
                          
                                            {/* <h2 className="text-[20px] text-[#1A766D] font-[500] mt-[32px] mb-0">Permissions </h2> */}
                          
                          
                                          </div>
                                          <div className="border border-[#D9D9D9] rounded-[16px] p-[16px] mt-[16px]">
                                            <h4 className="text-[20px] text-[#1A766D] font-[500] mb-[24px]">Registered Address</h4>
                                            <div className="grid grid-cols-2 gap-[24px]">
                                              <div className="lg:col-span-1 col-span-2">
                                                <h4 className="text-[16px] text-[#757575]">Address Line 1</h4>
                                                <h3 className="text-[#1E1E1E] text-[20px]">Building no1 Efafaf</h3>
                                              </div>
                                              <div className="lg:col-span-1 col-span-2">
                                                <h4 className="text-[16px] text-[#757575]">Address Line 2</h4>
                                                <h3 className="text-[#1E1E1E] text-[20px]">TOwn asnadw</h3>
                                              </div>
                                              <div className="lg:col-span-1 col-span-2">
                                                <h4 className="text-[16px] text-[#757575]">City</h4>
                                                <h3 className="text-[#1E1E1E] text-[20px]">Mumbai</h3>
                                              </div>
                                              <div className="lg:col-span-1 col-span-2">
                                                <h4 className="text-[16px] text-[#757575]">State</h4>
                                                <h3 className="text-[#1E1E1E] text-[20px]">Maharashtra</h3>
                                              </div>
                                              <div className="lg:col-span-1 col-span-2">
                                                <h4 className="text-[16px] text-[#757575]">Country</h4>
                                                <h3 className="text-[#1E1E1E] text-[20px]">India</h3>
                                              </div>
                                              <div className="lg:col-span-1 col-span-2">
                                                <h4 className="text-[16px] text-[#757575]">Zipcode</h4>
                                                <h3 className="text-[#1E1E1E] text-[20px]">450852</h3>
                                              </div>
                                             
                                            </div>
                          
                                            {/* <h2 className="text-[20px] text-[#1A766D] font-[500] mt-[32px] mb-0">Permissions </h2> */}
                          
                          
                                          </div>
                                        
                                        
                                          <div className="border border-[#D9D9D9] rounded-[16px] p-[16px] mt-[16px]">
                                            <h4 className="text-[16px] text-[#1E1E1E] font-[500] mb-[24px]">Account Status</h4>
                                            <div className="grid grid-cols-2 gap-[24px]">
                                              <div className="lg:col-span-1 col-span-2">
                                                <Switch size="lg" id="s2" />
                                              </div>
                                           
                                             
                                            </div>
                          
                                          
                          
                          
                                          </div>

                        </AlertDialogHeader>
                      </AlertDialogContent>
                    </AlertDialog>

                    {/* Delete */}
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-7 w-7 border border-[#1A766D] bg-white text-[#1A766D]"
                        >
                          <Icon
                            icon="heroicons:trash"
                            className="h-4 w-4"
                          />
                        </Button>
                      </AlertDialogTrigger>

                      <AlertDialogContent className="max-w-[400px]">

                        <AlertDialogHeader>
                          <AlertDialogTitle className="text-center text-[24px] font-medium text-[#1A766D]">
                            Are you sure, you want to delete client "dummy one"
                          </AlertDialogTitle>

                        
                        </AlertDialogHeader>

                        <AlertDialogFooter className="items-center !justify-center">

                          <AlertDialogCancel className="bg-[#5A5A5A] text-white hover:bg-[#1A766D] hover:text-white">
                            No, Go Back
                          </AlertDialogCancel>

                          <AlertDialogAction className="bg-[#1A766D] hover:bg-destructive/80">
                            Yes Delete
                          </AlertDialogAction>

                        </AlertDialogFooter>

                      </AlertDialogContent>
                    </AlertDialog>

                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* </Card> */}
      </Card>



    </div>
  )
}

export default Userlist