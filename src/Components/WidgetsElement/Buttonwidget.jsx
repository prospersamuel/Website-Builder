import { Context } from "../../Hooks/State";
import { Editicon } from "../../Utility/Editicon";


export function Buttonwidget() {

  const { isSidebarOpen } = Context();

  return (
    <>
      <div className="group relative w-fit">
        <Editicon />
        <button
          contentEditable={isSidebarOpen}
          className="bg-blue-500 text-white px-4 py-2 round"
        >
          Button
        </button>
      </div>
    </>
  );
}
