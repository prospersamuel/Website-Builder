import { Editicon } from "../../Utility/Editicon";


export function Inputwidget() {

  
  return (
    <>
      <div className="w-fit relative pt-3 group">
        <Editicon />
        <input className="w-56 text-black" type="text" />
      </div>
    </>
  );
}
