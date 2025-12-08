import { useState, useRef, useEffect } from "react";
import { useOS, type AppData } from "@/context/OSContext";
import { getAppComponent } from "@/apps.config";
import { X, Minus, Maximize2 } from "lucide-react";

interface WindowProps {
  app: AppData;
}

const Window = ({ app }: WindowProps) => {
  const { dispatch } = useOS();

  // Local state for dragging calculation
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  // start dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    // Prevent dragging if maximized
    if (app.isMaximized) return;
    dispatch({ type: "FOCUS", id: app.id }); // Tell OS we are focused
    setIsDragging(true);
    // Calculate where we clicked relative to the window's top-left corner
    dragOffset.current = {
      x: e.clientX - app.x,
      y: e.clientY - app.y,
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      dispatch({
        type: "UPDATE_POS",
        id: app.id,
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y,
      });
    };
    // stop dragging
    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    // clean up events
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, app.id, dispatch]);

  if (!app.isOpen) return null;

  const style: React.CSSProperties = {
    left: app.isMaximized ? 0 : app.x,
    top: app.isMaximized ? "40px" : app.y, // 40px ( h-10 or 2.5rem) height of the Navbar
    width: app.isMaximized ? "100%" : app.width, // use 'auto' for dynamic width
    height: app.isMaximized ? "calc(100% - 32px)" : app.height,
    zIndex: app.z,
    transform: app.isMinimized ? "translate(0, 500px) scale(0)" : "none",
    opacity: app.isMinimized ? 0 : 1,
    transition: isDragging ? "none" : "all 0.3s cubic-bezier(0.25,0.8,0.25,1)",
    borderRadius: app.isMaximized ? 0 : "1rem",
  };

  return (
    <div
      className="absolute flex flex-col shadow-[0_0_35px_rgba(0,0,0,0.15)] overflow-hidden border border-white/20"
      style={style}
      onMouseDown={() => dispatch({ type: "FOCUS", id: app.id })}
    >
      {/* Header */}
      <div
        className="h-10 flex items-center justify-between px-4 bg-white/70 backdrop-blur-2xl select-none cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onDoubleClick={() => dispatch({ type: "MAXIMIZE", id: app.id })}
      >
        {/* traffic lights */}
        <div className="flex gap-2 w-16 group">
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: "CLOSE", id: app.id });
            }}
            className="w-4 h-4 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center"
          >
            <X
              size={8}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: "MINIMIZE", id: app.id });
            }}
            className="w-4 h-4 rounded-full bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center"
          >
            <Minus
              size={8}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: "MAXIMIZE", id: app.id });
            }}
            className="w-4 h-4 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center"
          >
            <Maximize2
              size={8}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </button>
        </div>
        <div className="flex-1 text-center font-semibold text-sm text-gray-700">
          {app.title}
        </div>
        <div className="w-16"></div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">{getAppComponent(app.id)}</div>
    </div>
  );
};

export default Window;
