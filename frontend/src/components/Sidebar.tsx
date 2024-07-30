import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";
import { Button } from "./Button";
import {
  BellIcon,
  ChevronDoubleRightIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon,
  ChartBarIcon,
  CogIcon,
  UserGroupIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

interface SidebarProps {
  toggleModal: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ toggleModal }) => {
  const { logout, user } = useAuth();

  return (
    <aside className="w-64 p-4 min-h-screen h-full bg-white shadow-md border-r flex flex-col">
      <div className="flex mt-5">
        <UserCircleIcon className="h-9 w-9 mx-1 text-gray-500" />
        <h2 className="text-xl mt-1 font-medium">
          {user?.name || "Joe Gardner"}
        </h2>
      </div>

      <div className="flex justify-between mt-3">
        <div className="flex gap-4">
          <BellIcon className="h-6 w-6 ml-2 mt-2 text-gray-500" />
          <Image
            src="/icons/mode.svg"
            alt="Analytics Icon"
            height={24}
            width={24}
          />
          <ChevronDoubleRightIcon className="h-6 w-6 mt-2 text-gray-500" />
        </div>
        <button
          onClick={logout}
          className="px-3 py-2 text-gray-600 rounded-md bg-[#F4F4F4]"
        >
          Logout
        </button>
      </div>

      <nav className="mt-4 mb-2">
        <ul>
          <li className="p-3 bg-[#F4F4F4] rounded border border-gray-300 cursor-pointer flex items-center">
            <HomeIcon className="h-6 w-6 mr-3  text-gray-500" />
            Home
          </li>
          <li className="p-3 cursor-pointer flex items-center">
            <ChartBarIcon className="h-6 w-6 mr-3  text-gray-500" />
            Boards
          </li>
          <li className="p-3 cursor-pointer flex items-center">
            <CogIcon className="h-6 w-6 mr-3  text-gray-500" />
            Settings
          </li>
          <li className="p-3 cursor-pointer flex items-center">
            <UserGroupIcon className="h-6 w-6 mr-3  text-gray-500" />
            Teams
          </li>
          <li className="p-3 cursor-pointer flex items-center">
            <ChartBarIcon className="h-6 w-6 mr-3  text-gray-500" />
            Analytics
          </li>
        </ul>
      </nav>

      <Button
        text="Create new task"
        onClick={toggleModal}
        icon={
          <Image src="/icons/plus.svg" alt="Plus Icon" height={24} width={24} />
        }
      />

      <div className="mt-auto pb-4">
        <button className="flex items-center justify-center p-2 text-[#666666] rounded-md bg-[#F3F3F3] w-full">
          <ArrowDownTrayIcon className="h-8 w-8 mr-3  text-gray-500" />
          <div className="flex flex-col text-start">
            <p className="text-md font-medium text-start">Download the app</p>
            <p className="text-sm text-start">Get the full experience</p>
          </div>
        </button>
      </div>
    </aside>
  );
};
