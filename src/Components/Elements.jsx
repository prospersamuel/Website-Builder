// Elements.jsx
export function Elements({ widgets }) {
  return (
    <div className="grid md:grid-cols-2 gap-2">
      {widgets.map((element, i) => {
        const Icon = element.icon;
        return (
          <div
            key={i}
            draggable
            onDragStart={(e) => e.dataTransfer.setData("widget", element.name)}
            className="dark:bg-neutral-800 bg-neutral-200 center w-full flex-col gap-2 font-bold cursor-move dark:hover:bg-neutral-900 transition-all duration-500 hover:bg-neutral-300 border round h-[15vh]"
          >
            <Icon className="w-5 h-5 dark:text-white text-neutral-900" />
            <span 
            className="dark:text-white md:text-base text-[10px] text-neutral-900 text-center font-bold">{element.name.toUpperCase()}</span>
          </div>
        );
      })}
    </div>
  );
}


