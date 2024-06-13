import Image from "next/image";
import { Bell, ChevronDown, History, Plus, Settings, User, User2 } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="bg-slate-100 h-12 flex sticky top-0 items-center justify-between px-8">
      <div className="flex gap-5">
        {/* Recent activites */}
        <button>
          <History className="w-5 h-5 text-gray-700" />
        </button>
        {/* Search */}
        <SearchBar />
      </div>
      <div className="flex">
        {/* plus icons */}
        <div className="border-r border-gray-300 pr-4">
        <button className="p-2 bg-blue-600 rounded-lg ">
          <Plus className="text-slate-50 w-4 h-4"/>
        </button>
        </div>

        {/* user */}
        <div className="border-r border-gray-300 px-2">
        <button className="p-2 hover:bg-slate-300 rounded-lg ">
          <User2 className="text-slate-900 w-4 h-4"/>
        </button>
        </div>

        {/*Notification*/}
        <div className="border-r border-gray-300 px-2">
        <button className= "p-2 hover:bg-slate-300 rounded-lg ">
          <Bell className="text-slate-900 w-4 h-4"/>
        </button>
        </div>

        {/* settings */}
        <div className="border-r border-gray-300 px-2">
        <button className="p-2 hover:bg-slate-300 rounded-lg ">
          <Settings className="text-slate-900 w-4 h-4"/>
        </button>
        </div>

        {/* user profile */}
        <div className="flex gap-6">
            <button className="flex items-center px-2">
                <span>Adonias</span>
                <ChevronDown className="w-4 h-4"/>
            </button>

            <Image
             src = "/images/profile.jpg" 
             alt= "img" height={15} width={25}
             className="rounded-full border border-slate-600 "
            />

        </div>

      </div>
    </div>
  );
}
