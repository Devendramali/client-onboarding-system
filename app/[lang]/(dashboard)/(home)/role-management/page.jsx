"use client";

import Card from "@/components/ui/card-snippet";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

import { Label } from "@/components/ui/label";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { rolemanagement } from "@/app/[lang]/(dashboard)/(tables)/tailwindui-table/data";
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

export default function Page() {
  return (
   <div className=" space-y-6">
      <Card breadcrumbdata={[
          { title: "Dashboard", link: "/" },
          { title: "Role Management", link: "/role-management" },
        ]}>
        <div className="flex flex-wrap items-center gap-4 mb-5">
          <div className="flex-1">
            <h3 className="text-3xl font-medium text-[#1b776f] mb-0">Role Management</h3>
          </div>
          <div className="flex-none">
            <a href="/role-management/add" class="inline-flex items-center justify-center rounded-md text-[16px] font-semibold ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-0 disabled:opacity-50 whitespace-nowrap disabled:pointer-events-none cursor-pointer bg-[#1b776f] text-primary-foreground hover:bg-[#1b776f]/80 h-10 px-4 py-[10px]" ><svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M12 5V19" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>Add New Role</a>
          </div>
        </div>
           
              {/* <Card className="overflow-x-auto"> */}
                 <Table>
                   <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold">Sr No.</TableHead>
                        <TableHead className="font-semibold">Role Name</TableHead>
                        <TableHead className="font-semibold">Description</TableHead>
                        {/* <TableHead className="font-semibold">Department</TableHead> */}
                        {/* <TableHead className="font-semibold">Designation</TableHead> */}
                        {/* <TableHead className="font-semibold">Role</TableHead> */}
                        <TableHead className="font-semibold">Status</TableHead>
                        <TableHead className="font-semibold !text-left">Action</TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {rolemanagement.map((item) => (
                        <TableRow key={item.serialNo} className="hover:bg-muted">
                          <TableCell>{item.serialNo}</TableCell>

                          <TableCell>{item.roleName}</TableCell>

                          <TableCell>{item.description}</TableCell>

                          {/* <TableCell>{item.department}</TableCell> */}

                          {/* <TableCell>{item.designation}</TableCell> */}

                          {/* <TableCell>
                            <Badge
                              variant="soft"
                              color={
                                (item.role === "admin" && "default") ||
                                (item.role === "manager" && "info") ||
                                (item.role === "member" && "success")
                              }
                              className="capitalize"
                            >
                              {item.role}
                            </Badge>
                          </TableCell> */}

                          <TableCell>
                            <Switch
                              id={item.serialNo}
                              defaultChecked={item.status}
                            />
                          </TableCell>

                         <TableCell >
                                          <div className="flex gap-3">
                                          <a href="/role-management/update" class="inline-flex items-center justify-center rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-0 disabled:opacity-50 whitespace-nowrap disabled:pointer-events-none cursor-pointer hover:text-primary-foreground hover:border-primary hover:bg-[#1b776f] h-7 w-7 bg-[#fff] border border-[#1A766D] text-[#1A766D]">
                                            <Icon icon="heroicons:pencil" className="h-4 w-4 " />
                                          </a>
                        
                        
                        
                                          <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                              <Button
                                                size="icon"
                                                variant="outline"
                                                // color="secondary"
                                                className="h-7 w-7 bg-[#fff] border border-[#1A766D] text-[#1A766D]"
                                              >
                                                <Icon icon="heroicons:eye" className="h-4 w-4" />
                                              </Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent className="max-w-[800px] max-h-[90vh] overflow-y-auto">
                                      <AlertDialogHeader>
                                        <div className="">
                                           <div className="flex justify-between nx-items-center">
                        
                                                  <h3 className="text-[24px] font-medium text-[#1b776f]  mb-[32px]">Role  </h3>
                                                  <AlertDialogCancel className="bg-transparent hover:bg-transparent">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                      <path d="M18 6L6 18M6 6L18 18" stroke="#383838" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                  </AlertDialogCancel>
                                                </div>
                                        <div className="border border-[#D9D9D9] rounded-[16px] p-[16px]">
                                          <h4 className="text-[20px] text-[#1A766D] font-[500] mb-[24px]">Basic Information</h4>
                                          <div className="grid grid-cols-2 gap-[24px]">
                                            <div className="col-span-1">
                                              <h4 className="text-[16px] text-[#757575]">Role Name:</h4>
                                              <h3 className="text-[#1E1E1E] text-[20px]">sd,nsdfk</h3>
                                            </div>
                                            <div className="col-span-1">
                                              <h4 className="text-[16px] text-[#757575]">Role Description:</h4>
                                              <h3 className="text-[#1E1E1E] text-[20px]">Lasvdavnj dsv sj bs dvbjd v sdvk aaevfwevdsvsdf</h3>
                                            </div>
                                         
                                           
                                          </div>
                        
                                          {/* <h2 className="text-[20px] text-[#1A766D] font-[500] mt-[32px] mb-0">Permissions </h2> */}
                        
                        
                                        </div>
                                        
                        
                                         
                                        <div className="border border-[#D9D9D9] rounded-[16px] p-[16px] mt-[16px]">
                                          <h4 className="text-[20px] text-[#1A766D] font-[500] mb-[24px]">Permissions </h4>
                                          <div className="grid grid-cols-2 gap-[24px]">
                                        
                                             <div className="col-span-1">
                                                  <h4 className="text-[16px] text-[#757575] mb-[8px]">User Management</h4>
                                                  <div className="flex gap-2">
                                                  <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">View</h3>
                                                  <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Add</h3>
                                                  <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Edit</h3>
                                                  <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Delete</h3>

                                                  </div>
                                              </div> 
                                               <div className="col-span-1">
                                                  <h4 className="text-[16px] text-[#757575] mb-[8px]">Billing Management</h4>
                                                  <div className="flex gap-2">
                                                  <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">View</h3>
                                                  <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Add</h3>
                                                  <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Edit</h3>
                                                  <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Delete</h3>

                                                  </div>
                                              </div> 
                                               <div className="col-span-1">
                                                  <h4 className="text-[16px] text-[#757575] mb-[8px]">Client Management</h4>
                                                  <div className="flex gap-2">
                                                  <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">View</h3>
                                                  <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Add</h3>
                                                  <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Edit</h3>
                                                 
                                                  </div>
                                              </div> 
                                               <div className="col-span-1">
                                                  <h4 className="text-[16px] text-[#757575] mb-[8px]">Project Management</h4>
                                                  <div className="flex gap-2">
                                                  <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">View</h3>
                                                  <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Add</h3>
                                                  <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Edit</h3>
                                                  <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Delete</h3>

                                                  </div>
                                              </div>  
                                               <div className="col-span-1">
                                                  <h4 className="text-[16px] text-[#757575] mb-[8px]">Service Category & Service Master</h4>
                                                  <div className="flex gap-2">
                                                  <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">View</h3>
                                                  <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Edit</h3>
                                                  <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Delete</h3>

                                                  </div>
                                              </div> 
                                               <div className="col-span-1">
                                                  <h4 className="text-[16px] text-[#757575] mb-[8px]">Client Project Onboarding</h4>
                                                  <div className="flex gap-2">
                                                  <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">View</h3>
                                                  <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Add</h3>
                                                  <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Edit</h3>
                                                  <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Delete</h3>

                                                  </div>
                                              </div> 
                                               <div className="col-span-1">
                                                  <h4 className="text-[16px] text-[#757575] mb-[8px]">Client Confirmation</h4>
                                                  <div className="flex gap-2">
                                                  <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">View</h3>
                                                  <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Add</h3>
                                                 
                                                  </div>
                                              </div> 
                                               <div className="col-span-1">
                                                  <h4 className="text-[16px] text-[#757575] mb-[8px]">OTP Verification</h4>
                                                  <div className="flex gap-2">
                                                  <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">View</h3>
                                                  <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px] border border-[#1A766D]">Add</h3>
                                                 
                                                  </div>
                                              </div> 
                                               <div className="col-span-1">
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
                                      
                                    </AlertDialogContent>
                                          </AlertDialog>
                        
                                          <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                              <Button
                                                size="icon"
                                                variant="outline"
                                                className=" h-7 w-7 bg-[#fff] border border-[#1A766D] text-[#1A766D]"
                                              // color="secondary"
                                              >
                                                <Icon icon="heroicons:trash" className=" h-4 w-4  " />
                                              </Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent className="max-w-[400px]">
                                              <AlertDialogHeader>
                                                <h2 className="text-[24px] text-[#1A766D] text-center">Are you sure, you want to delete billing account "Account14284854"</h2>
                                              </AlertDialogHeader>
                                              <AlertDialogFooter className="items-center !justify-center">
                                                <AlertDialogCancel className="bg-[#5A5A5A] hover:bg-[#1A766D]">
                                                  No, Go Back
                                                </AlertDialogCancel>
                                                <AlertDialogAction className="bg-[#1A766D] hover:bg-destructive/80">
                                                  Yes Delete
                                                </AlertDialogAction>
                                              </AlertDialogFooter>
                                            </AlertDialogContent>
                                          </AlertDialog >
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

