import { useState } from "react";
import { UserForm } from "./components/UserForm";
import { UserTable } from "./components/UsersTable";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function App(){

  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);

  return (
    <main className="max-h-screen w-full">

        <h1 className="text-center text-5xl font-bold mt-10 -tracking-widest underline">User Management</h1>
        <div className="flex justify-center items-center h-full w-full flex-col">
            <Button onClick={handleOpen} variant="gradient" className="mt-5">
              Add User
            </Button>

          <UserTable />

          <Dialog open={open} handler={handleOpen}>
          <DialogBody>
            <UserForm />
          </DialogBody>
          </Dialog>
          
        </div>
    </main>
  )
}