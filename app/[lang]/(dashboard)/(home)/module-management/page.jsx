"use client";

import Card from "@/components/ui/card-snippet";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Icon } from "@iconify/react";
import { moduleData } from "@/app/[lang]/(dashboard)/(tables)/tailwindui-table/data";
// import Link from "next/link";


const Page = () => {

  return (<>
    <div className="space-y-6">
      <Card  breadcrumbdata={[
          { title: "Dashboard", link: "/" },
          { title: "Module Management", link: "/module-management" },
          // { title: "Add Role", link: "/role-management/add" },
        ]} >
        <div className="flex flex-wrap items-center gap-4 mb-5">
          <div className="flex-1">
            <h3 className="text-xl font-medium text-[#1b776f] mb-2">
              Module Management
            </h3>
          </div>

          <div className="flex-none">
           {/* <ToggleDialog /> */}
          </div>
        </div>

        <Card className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">
                  Module Name
                </TableHead>

                <TableHead className="font-semibold">
                  Module Code
                </TableHead>

                <TableHead className="font-semibold">
                  Module Description
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
              {moduleData.map((item) => (
                <TableRow
                  key={item.id}
                  className="hover:bg-muted"
                >
                  {/* Module Name */}
                  <TableCell className="font-medium">
                    {item.moduleName}
                  </TableCell>

                  {/* Module Code */}
                  <TableCell>
                    <span className="font-medium text-default-600">
                      {item.moduleCode}
                    </span>
                  </TableCell>

                  {/* Description */}
                  <TableCell className="max-w-[450px]">
                    <span className="text-sm text-muted-foreground">
                      {item.description}
                    </span>
                  </TableCell>

                  {/* Status */}
                  <TableCell>
                    <Switch
                      id={`module-${item.id}`}
                      defaultChecked={item.status}
                    />
                  </TableCell>

                  {/* Actions */}
                  <TableCell>
                    <div className="flex items-center gap-3">
                      {/* Edit */}
                      <a
                        href=""
                        className="inline-flex items-center justify-center rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-0 disabled:opacity-50 whitespace-nowrap disabled:pointer-events-none cursor-pointer dark:text-default-950 border bg-transparent hover:text-primary-foreground text-muted-foreground dark:bg-transparent hover:bg-default-500 dark:hover:bg-default-500/50 border-default-500 h-7 w-7"
                      >
                        <Icon
                          icon="heroicons:pencil"
                          className="h-4 w-4"
                        />
                      </a>

                      {/* View */}
                      <Button
                        size="icon"
                        variant="outline"
                        color="secondary"
                        className="h-7 w-7"
                      >
                        <Icon
                          icon="heroicons:eye"
                          className="h-4 w-4"
                        />
                      </Button>

                      {/* Delete */}
                      <Button
                        size="icon"
                        variant="outline"
                        color="secondary"
                        className="h-7 w-7"
                      >
                        <Icon
                          icon="heroicons:trash"
                          className="h-4 w-4"
                        />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

          </Table>
        </Card>
      </Card>
    </div>

      
    </>
  );
};

export default Page;