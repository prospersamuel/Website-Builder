import { RenderWidget } from "../../Utility/Render";
import { useDropWidgets } from "../../Hooks/UseDropWidgets";
import { DropArea } from "./Droparea";
import { Context } from "../../Hooks/State";


export function Canvas({ screenSize, currentPage, updateCurrentPageWidgets }) {
  const { droppedWidgets, handleDrop, handleDragOver } = useDropWidgets(currentPage.widgets, updateCurrentPageWidgets);
  const { isSidebarOpen } = Context();

  const sizeMap = {
    mobile: "375px",
    tablet: "768px",
    laptop: "100%",
  };

  return (
    <div className={`right-0 ${isSidebarOpen ? "w-[80%]" : "w-[100%]"} absolute h-screen center z-30 dark:bg-neutral-800 bg-neutral-200 transition-all duration-500`}>
      <main
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{ width: sizeMap[screenSize] }}
        className={`absolute flex-col ${isSidebarOpen ? 'top-[5vh] bottom-[5vh] h-[90vh]' : 'top-0 h-screen'} p-1 transition-all duration-500 dark:bg-neutral-900 overflow-y-auto`}
      >
        <div className="flex flex-col gap-1">
          {droppedWidgets.map((widget, idx) => (
            <RenderWidget key={idx} type={widget} />
          ))}
        </div>
        {isSidebarOpen && <DropArea />}
      </main>
    </div>
  );
}


// import { RenderWidget } from "../../Utility/Render";
// import { useDropWidgets } from "../../Hooks/UseDropWidgets";
// import { DropArea } from "./Droparea";
// import { useRef, useState } from "react";

// export function Canvas({ screenSize }) {
//   const {
//     droppedWidgets,
//     handleDrop,
//     handleDragOver,
//     updateWidgetPosition,
//   } = useDropWidgets();

//   const canvasRef = useRef(null);
//   const [draggingId, setDraggingId] = useState(null);

//   const handleMouseMove = (e) => {
//     if (!draggingId || !canvasRef.current) return;

//     const rect = canvasRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     updateWidgetPosition(draggingId, x, y);
//   };

//   const handleMouseUp = () => setDraggingId(null);

//   const sizeMap = {
//     mobile: "375px",
//     tablet: "768px",
//     laptop: "80%",
//   };

//   return (
//     <div
//       ref={canvasRef}
//       onDrop={handleDrop}
//       onDragOver={handleDragOver}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//       className="absolute right-0 top-[7vh] h-[93vh] bg-neutral-800 overflow-hidden"
//       style={{ width: sizeMap[screenSize] }}
//     >
//       {droppedWidgets.map((widget) => (
//         <div
//           key={widget.id}
//           style={{ left: widget.x, top: widget.y }}
//           className="absolute cursor-move"
//           onMouseDown={() => setDraggingId(widget.id)}
//         >
//           <RenderWidget type={widget.type} />
//         </div>
//       ))}

//       <DropArea />
//     </div>
//   );
// }
