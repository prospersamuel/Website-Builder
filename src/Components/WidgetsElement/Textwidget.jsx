import { EditingContext } from "../../Hooks/Editingcontext";
import { Context } from "../../Hooks/State";
import { Editicon } from "../../Utility/Editicon";



export function Textwidget() {

  const {fontSize} = EditingContext()

  const { isSidebarOpen } = Context();
  return (
    <>
    <div className="p-2 w-fit group relative">
      <Editicon />
      <h1
      style={{
        fontSize:`${fontSize}px`
      }}
        contentEditable={isSidebarOpen ? true : false}
        className="text-white"
      >
        This is a Text Element
      </h1>
      </div>
    </>
  );
}