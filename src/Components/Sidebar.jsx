import { useState } from "react";
import { widgets as allWidgets } from "./Widgets";
import { Elements } from "./Elements";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarRightCollapse,
} from "react-icons/tb";
import { Context } from "../Hooks/State";

export function Sidebar() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter widgets based on the search term
  const filteredWidgets = allWidgets.filter((widget) =>
    widget.name.toLowerCase().includes(searchTerm.toLowerCase())
);

const {isSidebarOpen, setIsSidebarOpen} = Context()
  function closeSidebar() {
    setIsSidebarOpen((prev) => !prev);
  }
  return (
    <aside
      className={`w-[20%] px-2 z-40 pt-2 pb-2 fixed ${
        isSidebarOpen ? "left-0" : "-left-[275px]"
      } top-0 h-screen transition-all duration-500 overflow-y-auto dark:bg-neutral-950 bg-neutral-200 border`}
    >
        <div
          onClick={closeSidebar}
          className={`fixed z-50 p-1.5 rounded-full top-[50%] dark:bg-neutral-900 bg-neutral-200 dark:text-neutral-200 text-neutral-900 shadow-lg cursor-pointer transition-all duration-500 ${
          isSidebarOpen ? "left-[20%]" : "left-2"}`}
        >
          {isSidebarOpen ? (
            <TbLayoutSidebarLeftCollapse />
          ) : (
            <TbLayoutSidebarRightCollapse />
          )}
        </div>
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search widgets..."
        className="bg-transparent dark:text-neutral-200 text-neutral-900 outline-none border mb-4 font-bold text-sm px-3 
        dark:placeholder:text-neutral-500 rounded py-1 w-full
        placeholder:text-neutral-600
        "
        type="search"
      />
      <Elements widgets={filteredWidgets} />
    </aside>
  );
}
