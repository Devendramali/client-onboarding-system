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
import { projectsData } from "@/app/[lang]/(dashboard)/(tables)/tailwindui-table/data";
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
        { title: "Project Management", link: "/project-management" },
        // { title: "Add Role", link: "/role-management/add" },
      ]}>
        <div className="flex flex-wrap items-center gap-4 mb-5">
          <div className="flex-1">
            <h3 className="text-3xl font-medium text-[#1b776f] mb-0">Project Management</h3>
          </div>
          <div className="flex-none">
            <a href="/project-management/add" class="inline-flex items-center justify-center rounded-md text-[16px] font-semibold ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-0 disabled:opacity-50 whitespace-nowrap disabled:pointer-events-none cursor-pointer bg-[#1b776f] text-primary-foreground hover:bg-[#1b776f]/80 h-10 px-4 py-[10px]" ><svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M12 5V19" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>Add Project</a>
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
                 <div className="max-w-[500px] truncate  ">
                  Project Name
                 </div>
              </TableHead>
              <TableHead className="font-semibold">
                 <div className="max-w-[500px] truncate  ">
                  Client Name
                 </div>
              </TableHead>
              <TableHead className="font-semibold">
                 <div className="max-w-[500px] truncate  ">
                  Linked Billing Account
                 </div>
              </TableHead>
              <TableHead className="font-semibold">
                 <div className="max-w-[500px] truncate  ">
                  Project Type
                 </div>
              </TableHead>
              <TableHead className="font-semibold">
                 <div className="max-w-[500px] truncate  ">
                 Start Date
                 </div>
              </TableHead>
              <TableHead className="font-semibold">
                 <div className="max-w-[500px] truncate  ">
                Expected Completion Date
                 </div>
              </TableHead>
              <TableHead className="font-semibold">
                 <div className="max-w-[500px] truncate  ">
                Project Amount
                 </div>
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
            {projectsData.map((item, index) => (
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
                  {item.projectName}
                    
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  <div className="max-w-[500px] truncate  ">
                  {item.clientName}
                    
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  <div className="max-w-[500px] truncate  ">
                  {item.linkedBillingAccount}
                    
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  <div className="max-w-[500px] truncate  ">
                  {item.projectType}
                    
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  <div className="max-w-[500px] truncate  ">
                  {item.startDate}
                    
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  <div className="max-w-[500px] truncate  ">
                  {item.expectedCompletionDate}
                    
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  <div className="max-w-[500px] truncate  ">
                  ₹ {item.projectAmount}
                    
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
                      href={`/project-management/update`}
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
                          <div className="">
                                           <div className="flex justify-between nx-items-center">
                                         
                                                                   <h3 className="text-[24px] font-medium text-[#1b776f]  mb-[32px]">Confirm New Project</h3>
                                                                   <AlertDialogCancel className="bg-transparent hover:bg-transparent">
                                                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                       <path d="M18 6L6 18M6 6L18 18" stroke="#383838" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                     </svg>
                                                                   </AlertDialogCancel>
                                                                 </div>
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
                            Are you sure, you want to delete project "BookStore"
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