"use client";

import Card from "@/components/ui/card-snippet";
import SimpleTable from "@/app/[lang]/(dashboard)/(tables)/tailwindui-table/simple-table";
import { Button } from "@/components/ui/button";
import UserTable from "@/app/[lang]/(dashboard)/(tables)/tailwindui-table/user-table";
import UserTableStatus from "@/app/[lang]/(dashboard)/(tables)/tailwindui-table/user-table-status";
import CollapsibleTable from "@/app/[lang]/(dashboard)/(tables)/tailwindui-table/collapsible-table";
import VerticalLine from "@/app/[lang]/(dashboard)/(tables)/tailwindui-table/vertical-line";
import WithCheckbox from "@/app/[lang]/(dashboard)/(tables)/tailwindui-table/with-checkbox";
import RowEditingDialog from "@/app/[lang]/(dashboard)/(tables)/tailwindui-table/row-editing-dialog";
import CheckboxWithAction from "@/app/[lang]/(dashboard)/(tables)/tailwindui-table/checkbox-with-action";
import SelectionOperation from "@/app/[lang]/(dashboard)/(tables)/tailwindui-table/selection-operation";
// import ColumnSticky from "@/app/[lang]/(dashboard)/(tables)/tailwindui-table";
import ColumnSticky from "@/app/[lang]/(dashboard)/(tables)/tailwindui-table/column-sticky";
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
import { usersdata } from "@/app/[lang]/(dashboard)/(tables)/tailwindui-table/data";
import { Icon } from "@iconify/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Userlist = () => {
  return (
   <div className=" space-y-6">
      <Card title="User Module">
        <div className="flex flex-wrap items-center gap-4 mb-5">
          <div className="flex-1">
            <h3 className="text-xl font-medium text-default-700 mb-2">User List</h3>
          </div>
          <div className="flex-none">
            <Button type="button">Add User</Button>
          </div>
        </div>
           
              <Card className="overflow-x-auto">
                 <Table>
                   <TableHeader>
                     <TableRow>
                       {/* <TableHead className="font-semibold bg-background drop-shadow-md"> Avatar</TableHead> */}
                       <TableHead className="font-semibold">Full Name</TableHead>
                       <TableHead className="font-semibold">Email Address</TableHead>
                       <TableHead className="font-semibold">Mobile Number</TableHead>
                       <TableHead className="font-semibold">Role</TableHead>
                       <TableHead className="font-semibold">Assigned Modules</TableHead>
                       <TableHead className="font-semibold">Status</TableHead>
                       <TableHead className="font-semibold text-left">Action</TableHead>
                       {/* <TableHead className="font-semibold nx-text-center">
                         Action
                       </TableHead> */}
                     </TableRow>
                   </TableHeader>
                   <TableBody>
                     {usersdata.map((item) => (
                       <TableRow key={item.email} className="hover:bg-muted">
                         {/* <TableCell className="font-medium  text-card-foreground/80 bg-background drop-shadow-md">
                           <Avatar className="rounded-full">
                             <AvatarImage src={item.avatar} />
                             <AvatarFallback>AB</AvatarFallback>
                           </Avatar>
                         </TableCell> */}
           
                         <TableCell>{item.name}</TableCell>
                         <TableCell>{item.email}</TableCell>
                         <TableCell>{item.mobile}</TableCell>
                         {/* <TableCell>{item.email}</TableCell> */}
                         <TableCell>
                           <Badge
                             variant="soft"
                             color={
                               (item.role === "admin" && "default") ||
                               (item.role === "member" && "success") ||
                               (item.role === "owner" && "info")
                              }
                              className=" capitalize"
                              >
                             {item.role}
                           </Badge>
                         </TableCell>
                             <TableCell>{item.role}</TableCell>
                         <TableCell>
                           <Switch id={item.email} />
                         </TableCell>
                         <TableCell className="flex gap-3 ">
                             <Button
                               size="icon"
                               variant="outline"
                               color="secondary"
                               className=" h-7 w-7"
                             >
                               <Icon icon="heroicons:pencil" className=" h-4 w-4  " />
                             </Button>
                             <Button
                               size="icon"
                               variant="outline"
                               className=" h-7 w-7"
                               color="secondary"
                             >
                               <Icon icon="heroicons:eye" className=" h-4 w-4  " />
                             </Button>
                             <Button
                               size="icon"
                               variant="outline"
                               className=" h-7 w-7"
                               color="secondary"
                             >
                               <Icon icon="heroicons:trash" className=" h-4 w-4  " />
                             </Button>
                         </TableCell>
                       </TableRow>
                     ))}
                   </TableBody>
                 </Table>
               </Card>
      </Card>
    

      
    </div>
  )
}

export default Userlist