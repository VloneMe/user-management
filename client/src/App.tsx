import { Navbar } from "@material-tailwind/react";
import { UserTable } from "./components/UsersTable";

export default function App(){
  return (
    <main className="max-h-screen w-full">

        <h1 className="text-center text-2xl font-bold mt-10">User Management</h1>
        <div className="flex justify-center items-center h-full w-full">
          <UserTable />
        </div>
    </main>
  )
}