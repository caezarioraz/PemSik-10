import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {

  const navigate  = useNavigate()

  const token = localStorage.getItem("authToken");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  }
  return (
    <aside className=" w-64 min-h-screen  bg-red-800 text-white flex flex-col rounded-br-xl">
      <div className="p-12">
        <h1 className="text-3xl font-bold">Data Mahasiswa</h1>
      </div>
      <nav className="flex flex-col gap-4 px-4">
        <a
          href="#"
          className="hover:bg-red-700 px-4 py-2 rounded-md transition">
          Dashboard
        </a>
        <a
          href="#"
          className="hover:bg-red-700 px-4 py-2 rounded-md transition">
          Data
        </a>
        <a
          href="#"
          className="hover:bg-red-700 px-4 py-2 rounded-md transition">
          Settings
        </a>
        {
          token ? <Button className="bg-black text-white px-4 py-2 rounded-md" onClick={handleLogout}>Logout</Button>: <Button onClick={handleLogout}>Login</Button>

        }
      </nav>
    </aside>
  );
};

export default Sidebar;
