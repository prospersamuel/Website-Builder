import { useState, useEffect } from "react";

export function useDropWidgets(initialWidgets, onUpdate) {
  const [droppedWidgets, setDroppedWidgets] = useState(initialWidgets || []);

  useEffect(() => {
    setDroppedWidgets(initialWidgets || []);
  }, [initialWidgets]);

  const handleDrop = (e) => {
    e.preventDefault();
    const widget = e.dataTransfer.getData("widget");
    const updated = [...droppedWidgets, widget];
    setDroppedWidgets(updated);
    onUpdate(updated);
  };

  const handleDragOver = (e) => e.preventDefault();

  return { droppedWidgets, handleDrop, handleDragOver };
}





// useDropWidgets.js
// import { useState } from "react";

// export function useDropWidgets() {
//   const [droppedWidgets, setDroppedWidgets] = useState([]);

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const widget = e.dataTransfer.getData("widget");
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     setDroppedWidgets((prev) => [
//       ...prev,
//       { id: Date.now(), type: widget, x, y },
//     ]);
//   };

//   const handleDragOver = (e) => e.preventDefault();

//   const updateWidgetPosition = (id, x, y) => {
//     setDroppedWidgets((prev) =>
//       prev.map((w) => (w.id === id ? { ...w, x, y } : w))
//     );
//   };

//   return { droppedWidgets, handleDrop, handleDragOver, updateWidgetPosition };
// }
