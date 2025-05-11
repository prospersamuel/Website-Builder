import { useState } from "react";
import { Menu, X } from "lucide-react"; // or use react-icons if preferred
import { Context } from "../../Hooks/State";
import { Editicon } from "../../Utility/Editicon";

export function WidgetHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navList = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];
    const { isSidebarOpen } = Context();
  

  return (
    <header className="bg-blue-500 group relative dark:text-white text-neutral-900 w-full shadow-md">
      <Editicon/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[7vh]">
          {/* Logo */}
          <div 
          contentEditable = {isSidebarOpen ? true : false}
          className="text-xl font-bold tracking-wide">
            LOGO
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-3 text-sm font-bold">
            {navList.map((nav, i) => (
              <a
              contentEditable = {isSidebarOpen ? true : false}
              className="hover:bg-neutral-800 transition p-1 rounded"
                key={i}
                href={nav.link}
              >
                {nav.name.toUpperCase()}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileOpen && (
        <div className="md:hidden dark:bg-neutral-800 bg-neutral-200 px-4 pb-4 transition">
          <nav className="flex flex-col text-end gap-2 text-sm font-medium">
            {navList.map((nav, i) =>(
              <a 
              contentEditable = {isSidebarOpen ? true : false}
              className="mt-2"
              key={i}
              href={nav.link}>
                {nav.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
