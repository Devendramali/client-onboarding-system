"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  
} from "@/components/ui/select";
import Card from "@/components/ui/card-snippet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
     <Card title="Add User">
    <form>
      <div className="grid grid-cols-2 gap-4">

        {/* Full Name */}
        <div className="col-span-2 lg:col-span-1">
          <Input
            type="text"
            placeholder="Full Name"
          />
        </div>

        {/* Email Address */}
        <div className="col-span-2 lg:col-span-1">
          <Input
            type="email"
            placeholder="Email Address"
          />
        </div>

        {/* Mobile Number */}
        <div className="col-span-2 lg:col-span-1">
          <Input
            type="tel"
            placeholder="Mobile Number"
          />
        </div>

        {/* Department */}
        <div className="col-span-2 lg:col-span-1">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Department" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="it">IT</SelectItem>
              <SelectItem value="hr">HR</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="sales">Sales</SelectItem>
              <SelectItem value="operations">Operations</SelectItem>
              <SelectItem value="administration">
                Administration
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Designation */}
        <div className="col-span-2 lg:col-span-1">
          <Input
            type="text"
            placeholder="Designation"
          />
        </div>

        {/* Role */}
        <div className="col-span-2 lg:col-span-1">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Role" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="manager">Manager</SelectItem>
              <SelectItem value="member">Member</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Status */}
        {/* <div className="col-span-2 lg:col-span-1">
          <Select defaultValue="active">
            <SelectTrigger>
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div> */}

        {/* Send Login / Activation Email */}
        <div className="col-span-2">
          <div className="flex items-center gap-1.5">
            <Checkbox
              id="activationEmail"
              size="sm"
              color="default"
            />

            <Label
              htmlFor="activationEmail"
              className="text-base text-muted-foreground font-normal"
            >
              Send Login/Activation Email
            </Label>
          </div>
        </div>

        {/* Submit */}
        <div className="col-span-2 flex gap-3">
          <Button type="submit">
            Create User
          </Button>

          <Button type="button" variant="outline">
            Cancel
          </Button>
        </div>

      </div>
    </form>
    </Card>
  );
}