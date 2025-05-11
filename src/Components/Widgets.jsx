// widgets.js
import {
    Text,
    Type,
    Box,
    Split,
    SquareMousePointer,
    Heading1,
    LayoutTemplate,
    FileText,
    ListTree,
    Loader,
    Search,
    Table,
  } from "lucide-react";
  
  export const widgets = [
    { name: "text", icon: Text },
    { name: "Input", icon: Type },
    { name: "container", icon: Box },
    { name: "Divider", icon: Split },
    { name: "Button", icon: SquareMousePointer },
    { name: "Header", icon: Heading1 },
    { name: "footer", icon: LayoutTemplate },
    { name: "Form", icon: FileText },
    { name: "select Field", icon: ListTree },
    { name: "Progress", icon: Loader },
    { name: "Search box", icon: Search },
    { name: "table", icon: Table },
  ];
  