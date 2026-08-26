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
      <Card >
        <div className="flex flex-wrap items-center gap-4 mb-5">
          <div className="flex-1">
            <h3 className="text-xl font-medium text-default-700 mb-2">Role Management</h3>
          </div>
          <div className="flex-none">
            <a href="/role-management/add" class="inline-flex items-center justify-center rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-0 disabled:opacity-50 whitespace-nowrap disabled:pointer-events-none cursor-pointer bg-[#1b776f] text-primary-foreground hover:bg-[#1b776f]/80 h-10 px-4 py-[10px]" >Add Role</a>
          </div>
        </div>
           
              {/* <Card className="overflow-x-auto"> */}
                 <Table>
                   <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold">Serial No.</TableHead>
                        <TableHead className="font-semibold">Role Name</TableHead>
                        <TableHead className="font-semibold">Description</TableHead>
                        {/* <TableHead className="font-semibold">Department</TableHead> */}
                        {/* <TableHead className="font-semibold">Designation</TableHead> */}
                        {/* <TableHead className="font-semibold">Role</TableHead> */}
                        <TableHead className="font-semibold">Status</TableHead>
                        <TableHead className="font-semibold text-left">Action</TableHead>
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

                          <TableCell className="flex gap-3">
                            {/* <Button
                              size="icon"
                              variant="outline"
                              color="secondary"
                              className="h-7 w-7"

                            >
                            </Button> */}
                            <a href="/role-management/update" class="inline-flex items-center justify-center rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-0 disabled:opacity-50 whitespace-nowrap disabled:pointer-events-none cursor-pointer dark:text-default-950 border bg-transparent hover:text-primary-foreground text-muted-foreground dark:bg-transparent hover:bg-default-500 dark:hover:bg-default-500/50 border-default-500 h-7 w-7">
                              <Icon icon="heroicons:pencil" className="h-4 w-4" />
                            </a>

                            
                            <Button
                              size="icon"
                              variant="outline"
                              color="secondary"
                              className="h-7 w-7"
                            >
                              <Icon icon="heroicons:eye" className="h-4 w-4" />
                            </Button>

                             <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      size="icon"
                      variant="outline"
                      className=" h-7 w-7"
                      color="secondary"
                    >
                      <Icon icon="heroicons:trash" className=" h-4 w-4  " />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="bg-[#1b776f]">
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction className="bg-destructive hover:bg-destructive/80">
                        Ok
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
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

