import { useState } from "react";
import { Canvas } from "./Components/Canvas/Canvas";
import { Sidebar } from "./Components/Sidebar";
import { Header } from "./Components/Header";
import { Context } from "./Hooks/State";
import { Editingbar } from "./Components/Editingbar";
import { Bottombar } from "./Components/Bottombar";

export default function App() {
  const [screenSize, setScreenSize] = useState("laptop");
  const { darkMode } = Context();

  // Pages state here
  const [pages, setPages] = useState([{ id: 1, widgets: [] }]);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [selectedWidgetId, setSelectedWidgetId] = useState(null);


  return (
    <main className={darkMode ? "dark" : ""}>
      <Header setScreenSize={setScreenSize} screenSize={screenSize} />
      <div className="flex">
        <Sidebar />
        <Canvas
          screenSize={screenSize}
          currentPage={pages[currentPageIndex]}
          updateCurrentPageWidgets={(widgets) => {
            const updated = [...pages];
            updated[currentPageIndex].widgets = widgets;
            setPages(updated);
          }}
          selectedWidgetId={selectedWidgetId}
          setSelectedWidgetId={setSelectedWidgetId}
        />

        <Editingbar
          selectedWidgetId={selectedWidgetId}
          pages={pages}
          setPages={setPages}
          currentPageIndex={currentPageIndex}
        />
      </div>
      <Bottombar
        pages={pages}
        setPages={setPages}
        currentPageIndex={currentPageIndex}
        setCurrentPageIndex={setCurrentPageIndex}
      />
    </main>
  );
}
