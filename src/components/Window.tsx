import { useEffect, useRef, useState } from "react";

interface Position {
  x: number;
  y: number;
}

interface WindowProps {
  id: string;
  title: string;
  x: number;
  y: number;
  z: number;
  isOpen: boolean;
  onClose: (id: string) => void;
  onFocus: (id: string) => void;
  content: React.ReactNode;
}

// dragable window component
const Window: React.FC<WindowProps> = ({
  id,
  title,
  x,
  y,
  isOpen,
  onClose,
  onFocus,
  content,
  z,
}) => {
  // Track position locally for immediate feedback
  const [pos, setPose] = useState<Position>({ x, y });
  // console.log(pos);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // We use a Ref to store the offset because we need the *initial* click delta
  // unrelated to re-renders.

  const dragOffset = useRef<Position>({ x: 0, y: 0 });

  //  start dragging
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    // Calculate where we clicked relative to the window's top-left corner
    dragOffset.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    };

    // console.log("offset", dragOffset.current);
    // console.log(e.clientX, e.clientY);
  };

  // Handle moving (Global listener to prevent losing focus if mouse moves too fast)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      // console.log(e.clientX, dragOffset.current.x);
      setPose({
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  // Return early check MUST happen after hooks are defined
  if (!isOpen) return null;

  return (
    <div
      className="absolute bg-white rounded-lg shadow-2xl w-96 overflow-hidden border border-gray-200 flex flex-col"
      style={{ left: pos.x, top: pos.y, zIndex: z }}
      onMouseDown={() => onFocus(id)}
    >
      {/* Header Bar - This is the "Handle" for dragging */}
      <div
        className="h-8 bg-gray-100 border-b flex items-center px-3 cursor-default select-none"
        onMouseDown={handleMouseDown} // Drag starts here
      >
        {/* Traffic Lights */}
        <div className="flex gap-2 mr-4">
          {/* stopPropagation prevents the drag logic from firing when clicking Close */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose(id);
            }}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
          />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs font-semibold text-gray-600">{title}</span>
      </div>

      {/* Content Area */}
      <div className="p-4 h-64 overflow-auto bg-white text-sm text-gray-800">
        {content}
      </div>
    </div>
  );
};

export default Window;
