import { FaPlusCircle } from "react-icons/fa";
import { Context } from "../Hooks/State";



export function Bottombar({ pages, setPages, currentPageIndex, setCurrentPageIndex }) {
  const { isSidebarOpen } = Context();

  if (!isSidebarOpen) return null;

  return (
    <div className="dark:bg-neutral-950 bg-neutral-200 flex transition-all duration-500 justify-between px-3 border-t-2 border-[#737373] items-center fixed z-50 right-0 bottom-0 w-[80%] h-[5vh]">
      <Pages
        pages={pages}
        setPages={setPages}
        currentPageIndex={currentPageIndex}
        setCurrentPageIndex={setCurrentPageIndex}
      />
      <Savebutton />
    </div>
  );
}

export function Pages({ pages, setPages, currentPageIndex, setCurrentPageIndex }) {
  const handleAddPage = () => {
    setPages([...pages, { id: pages.length + 1, widgets: [] }]);
    setCurrentPageIndex(pages.length);
  };

  return (
    <div className="flex items-center gap-1">
      {/* Page Navigation Buttons */}
      <div className="flex gap-1">
        {pages.map((page, index) => (
          <button
            key={page.id}
            onClick={() => setCurrentPageIndex(index)}
            className={`uppercase border text-xs font-bold px-2 py-0.5 rounded transition ${
              index === currentPageIndex
                ? "bg-neutral-700 text-white"
                : "bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200 hover:bg-neutral-300"
            }`}
          >
            Page {index + 1}
          </button>
        ))}
      </div>

      {/* Add Page Button */}
      <FaPlusCircle
        onClick={handleAddPage}
        className="ml-2 text-xl cursor-pointer dark:text-neutral-200 text-neutral-900"
        title="Add New Page"
      />
    </div>
  );
}



export function Savebutton() {
  return (
    <> 
      <button className="uppercase dark:hover:bg-neutral-900 text-neutral-900 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-200 py-0.5 border text-xs font-bold px-4 rounded">
        Save
      </button>
    </>
  );
}
