import { useState, useRef, useEffect } from "react";
import { Context } from "../Hooks/State";
import { FaPlusCircle } from "react-icons/fa";
import { EditingContext } from "../Hooks/Editingcontext";


export function Editingbar() {
  const { editingBar, isSidebarOpen, setEditingBar } = Context();
  const barRef = useRef(null);

  const [position, setPosition] = useState({ x: 1090, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    const rect = barRef.current.getBoundingClientRect();
    setIsDragging(true);
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Attach events to the whole window for smoother dragging
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });

  if (!editingBar || !isSidebarOpen) return null;

  const {fontSize, setFontSize} = EditingContext()


  return (
    <div
      ref={barRef}
      style={{
        left: position.x,
        top: position.y,
      }}
      className="fixed z-50 w-[20%] h-[60vh] backdrop-filter bg-neutral-200 dark:bg-neutral-900 border rounded shadow overflow-auto"
    >
      {/* Drag handle */}
      <div
        onMouseDown={handleMouseDown}
        className="cursor-move between select-none text-sm p-1 font-bold bg-neutral-300 dark:bg-neutral-800 border-b"
      >
        <p className="dark:text-neutral-200 text-neutral-900">EDIT {}</p> 
        <span 
        onClick={()=>setEditingBar(false)}
        className="cursor-pointer rotate-45 text-xl dark:text-neutral-200 text-neutral-900"><FaPlusCircle/></span>
      </div>

      {/* Content area */}
      <div className="p-3 text-sm">
        {/* Add your styling controls here */}
<label className="block text-xs font-medium mb-1 text-neutral-700 dark:text-neutral-300">
  Font Size (px)
</label>
<input
  type="number"
  min={8}
  max={72}
  step={1}
  className="w-full px-2 py-1 text-sm rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
  defaultValue={fontSize}
  onChange={(e) =>  setFontSize(`${e.target.value}`)  }
/>
      </div>
    </div>
  );
}
