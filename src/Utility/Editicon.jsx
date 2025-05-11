import { Context } from "../Hooks/State";

export function Editicon() {

  const { isSidebarOpen, setEditingBar } = Context();

  return (
    <>
      {isSidebarOpen ? <span
        onClick={() => setEditingBar(prev => !prev)}
        className="absolute -top-2.5 transition-all duration-500 cursor-pointer text-neutral-900 right-1 font-extrabold dark:text-white hidden group-hover:flex shadow"
      >
        ...
      </span> : ''}
    </>
  );
}
