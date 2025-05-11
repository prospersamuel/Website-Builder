// Utility component to render based on type
import { WidgetHeader } from "../Components/WidgetsElement/WidgetHeader";
import { Buttonwidget } from "../Components/WidgetsElement/Buttonwidget";
import { Textwidget } from "../Components/WidgetsElement/Textwidget";
import { Inputwidget } from "../Components/WidgetsElement/Inputwidget"


export function RenderWidget({ type }) {

  switch (type.toLowerCase()) {
    case "text":
      return <Textwidget />
    case "button":
      return <Buttonwidget/>
    case "header":
      return <WidgetHeader />;
    case "input":
      return <Inputwidget/>;
    case "container":
      return <div className="flex border w-full h-[10vh]"></div>;
    // Add more cases for other widgets
    default:
      return <div className="text-gray-400">Unknown Widget: {type}</div>;
  }
}



