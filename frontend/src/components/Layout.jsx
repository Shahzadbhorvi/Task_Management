import React from "react";
import { Outlet, Link } from "react-router-dom";
import { FaHome, FaTasks } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { GoProjectRoadmap } from "react-icons/go";



export default function Layout() {
   const user = {
    name: "John Doe",
    picture : ""
    }
    const getSample=(name)=>{
      if(!name) return "";
      const parts = name.split(" ");
      if(parts.length==1) {
        return parts[0].substring(0,2).toUpperCase();
      }
      return (parts[0][0] + parts[1][0]).toUpperCase();


    }
  return (
   
    <div className="flex h-screen w-screen">
      {/* Side Bar */}

      <aside className=" bg-[rgb(2,16,36)] text-white w-64 p-6">
        
          <h2 className="font-bold font-mono mb-5 p-5 text-[#f5f7fa] text-3xl border-b-[0.5px] border-[#7DA0CA] ">
            
            TaskFlow
          </h2>
        
        
        <nav className="flex flex-col ">

          <Link to="/" className="flex gap-2 p-3 tracking-normal text-xl  text-[#C1E8FF] hover:bg-[#052659] rounded-2xl "> <FaHome className="mt-1"/>DashBoard</Link>
          <Link to="/tasks" className="flex gap-2 p-3 tracking-normal text-xl text-[#C1E8FF]"> <FaTasks className="mt-1"/> Tasks</Link>
          <Link to="/projects" className="flex gap-2 p-3 tracking-normal text-xl  text-[#C1E8FF] "><GoProjectRoadmap className="mt-1"/> Projects</Link>
          <Link to="/setting" className="flex gap-2 p-3 tracking-normal text-xl  text-[#C1E8FF] "><CiSettings  className="mt-1" /> Setting</Link>
        </nav>
      </aside>
      {/* Right  */}
      <div  className="flex flex-col w-full   ">
        <header className=" w-full shadow flex justify-between items-center  p-4  ">
          <input type="text" placeholder="Search Text" className=" border border-gray-400 rounded-lg" />
       <div className="flex items-center gap-4">
        <span>{user.name}</span>

        {user.picture ? (
          <img
            src={user.picture}
            alt={user.name}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
            {getSample(user.name)}
          </div>
        )}
        </div>
        </header>
          <main className="p-6 bg-gray-100 flex-1 overflow-y-auto">
        <Outlet /> {/* ✅ required */}
      </main>

      </div>
      

    </div>
  );
}
