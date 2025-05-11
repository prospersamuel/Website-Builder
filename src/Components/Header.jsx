import { BiMobile } from "react-icons/bi";
import { FaLaptop, FaMoon, FaSun, FaTabletAlt } from "react-icons/fa";
import { Context } from "../Hooks/State";


export function Header({ screenSize, setScreenSize}) {

  const iconClasses = (device) =>
    `transition ${
      screenSize === device
        ? "dark:text-white text-neutral-900"
        : "dark:hover:text-white hover:text-neutral-900"
    }`;

    const deviceIcons = [
      { icon: <BiMobile />, name: "mobile" , iconClasses: iconClasses("mobile")},
      { icon: <FaTabletAlt />, name: "tablet", iconClasses: iconClasses("tablet") },
      { icon: <FaLaptop />, name: "laptop", iconClasses: iconClasses("laptop") },
    ]
      const { isSidebarOpen, setDarkMode, darkMode } = Context();
    

  return (
    <>
   { isSidebarOpen ? 
    <div className="dark:bg-neutral-950 bg-neutral-200 flex transition-all duration-500 justify-between px-3 border-b-2 border-[#737373] items-center fixed z-50 right-0 w-[80%] h-[5vh]">
          <div className="flex gap-2 text-xl *:cursor-pointer">
            {deviceIcons.map((device) => (
              <div 
              onClick={() => setScreenSize(device.name)}
              className="cursor-pointer dark:hover:bg-neutral-700 p-2 text-neutral-500  hover:bg-neutral-300 transition-all duration-300 rounded-full "
              key={device.name}>
              <span
                className={`${device.iconClasses}`}
              >
                {device.icon}
              </span>
              </div>
            ))}
          </div>
          <span 
          onClick={()=> setDarkMode(prev => !prev)}
          className="cursor-pointer hover:rotate-180 dark:text-neutral-200 text-neutral-900 transition-all rounded-full duration-500 border">
            {darkMode ? <FaSun /> : <FaMoon/>}
          </span>
        </div> : ''}
        </>
      );
    }

