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
import { billingAccountsData } from "@/app/[lang]/(dashboard)/(tables)/tailwindui-table/data";
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
        { title: "Billing Account Management", link: "/billing-account-management" },
        // { title: "Add Role", link: "/role-management/add" },
      ]}>
        <div className="flex flex-wrap items-center gap-4 mb-5">
          <div className="flex-1">
            <h3 className="text-3xl font-medium text-[#1b776f] mb-0">Billing Account Management</h3>
          </div>
          <div className="flex-none">
            <a href="/billing-account-management/add" class="inline-flex items-center justify-center rounded-md text-[16px] font-semibold ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-0 disabled:opacity-50 whitespace-nowrap disabled:pointer-events-none cursor-pointer bg-[#1b776f] text-primary-foreground hover:bg-[#1b776f]/80 h-10 px-4 py-[10px]" ><svg className="me-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M12 5V19" stroke="#FEFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>Add New Billing Account</a>
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
              <TableHead className="font-semibold ">Company Name</TableHead>
              <TableHead className="font-semibold">Billing Name</TableHead>
              <TableHead className="font-semibold">GST No.</TableHead>
              <TableHead className="font-semibold">Contact Name</TableHead>
              <TableHead className="font-semibold">Contact Email</TableHead>
              <TableHead className="font-semibold">Contact No.</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold text-left">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {billingAccountsData.map((item, index) => (
              <TableRow key={item.billingName} className="hover:bg-muted">
                <TableCell>{index + 1}</TableCell>
                <TableCell className=" ">
                    <div className="max-w-[500px] truncate  ">{item.companyName}</div></TableCell>

                <TableCell  className=" ">  <div className="max-w-[500px] truncate  ">{item.billingName}</div></TableCell>

                <TableCell>  <div className="max-w-[500px] truncate  ">{item.gstNo}</div></TableCell>

                <TableCell>  <div className="max-w-[500px] truncate  ">
                  {item.contactName}</div></TableCell>

                <TableCell>  <div className="max-w-[500px] truncate  ">{item.contactEmail}</div></TableCell>
                <TableCell>  <div className="max-w-[500px] truncate  ">{item.contactNo}</div></TableCell>

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
                    id={item.email}
                    defaultChecked={item.status}
                  />
                </TableCell>

                <TableCell >
                  <div className="flex gap-3">
                  <a href="/billing-account-management/update" class="inline-flex items-center justify-center rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-0 disabled:opacity-50 whitespace-nowrap disabled:pointer-events-none cursor-pointer hover:text-primary-foreground hover:border-primary hover:bg-[#1b776f] h-7 w-7 bg-[#fff] border border-[#1A766D] text-[#1A766D]">
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

                          <h3 className="text-[24px] font-medium text-[#1b776f]  mb-[32px]">Billing Account</h3>
                          <AlertDialogCancel className="bg-transparent hover:bg-transparent">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M18 6L6 18M6 6L18 18" stroke="#383838" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </AlertDialogCancel>
                        </div>
                <div className="border border-[#D9D9D9] rounded-[16px] p-[16px]">
                  <h4 className="text-[20px] text-[#1A766D] font-[500] mb-[24px]">Company Information</h4>
                  <div className="grid grid-cols-2 gap-[24px]">
                    <div className="lg:col-span-1 col-span-2">
                      <h4 className="text-[16px] text-[#757575]">Company name:</h4>
                      <h3 className="text-[#1E1E1E] text-[20px]">BrightWave Solutions</h3>
                    </div>
                    <div className="lg:col-span-1 col-span-2">
                      <h4 className="text-[16px] text-[#757575]">Billing name:</h4>
                      <h3 className="text-[#1E1E1E] text-[20px]">Luna Harper</h3>
                    </div>
                    <div className="lg:col-span-1 col-span-2">
                      <h4 className="text-[16px] text-[#757575]">GST Number:</h4>
                      <h3 className="text-[#1E1E1E] text-[20px]">GSTIN 29ABCDE1234F2Z5</h3>
                    </div>
                    <div className="lg:col-span-1 col-span-2">
                      <h4 className="text-[16px] text-[#757575]">PAN Number:</h4>
                      <h3 className="text-[#1E1E1E] text-[20px]">GSTIN 29ABCDE1234F2Z5</h3>
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
                  <h4 className="text-[20px] text-[#1A766D] font-[500] mb-[24px]">Billing Address</h4>
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
                  <h4 className="text-[20px] text-[#1A766D] font-[500] mb-[24px]">Contact</h4>
                  <div className="grid grid-cols-2 gap-[24px]">
                    <div className="lg:col-span-1 col-span-2">
                      <h4 className="text-[16px] text-[#757575]">Contact Name:</h4>
                      <h3 className="text-[#1E1E1E] text-[20px]">jhone doe</h3>
                    </div>
                    <div className="lg:col-span-1 col-span-2">
                      <h4 className="text-[16px] text-[#757575]">Contact Email Address:</h4>
                      <h3 className="text-[#1E1E1E] text-[20px]">abc@gmail.com</h3>
                    </div>
                    <div className="lg:col-span-1 col-span-2">
                      <h4 className="text-[16px] text-[#757575]">Contact Phone Number:</h4>
                      <h3 className="text-[#1E1E1E] text-[20px]">Mumbai</h3>
                    </div>
                     <div className="lg:col-span-1 col-span-2">
                                <h4 className="text-[16px] text-[#757575]">Role</h4>
                                <h3 className="text-[#1A766D] bg-[#E8FFFB] w-fit rounded-[100px] px-[16px] py-[8px] text-[16px]">Admin</h3>
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

export default Userlist