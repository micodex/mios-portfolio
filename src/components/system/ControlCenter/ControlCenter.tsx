import { Controls } from "./controls.config";

// control widgets components
import WideControl from "./widgets/WideControl";
import MusicControl from "./widgets/MusicControl";
import SliderControl from "./widgets/SliderControl";
import CircularControl from "./widgets/CircularControl";
import { useOS } from "@/context/useOS";

const ControlCenter = () => {
  const { state } = useOS();
  const isOpen = state.systemStatus.ccOpen;

  return (
    <div
      className={`fixed top-14 right-4 w-74 not-first-of-type: z-100 select-none transition-all
        ${
          isOpen
            ? "visible opacity-100 scale-100"
            : "invisible opacity-0 scale-95"
        }
      `}
    >
      {/* bento grid */}
      <div className="grid grid-cols-4 gap-3">
        {Controls.map((control) => {
          const spanClass = `${control.colSpan || "col-span-1"} ${
            control.rowSpan || ""
          }`; // example 'col-span-2 row-span-2' for music control

          return (
            <div
              key={control.id}
              className={`${spanClass} flex justify-center`}
            >
              {control.type === "circular" && (
                <CircularControl data={control} />
              )}
              {control.type === "wide" && <WideControl data={control} />}
              {control.type === "slider" && <SliderControl data={control} />}
              {control.type === "music" && <MusicControl />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ControlCenter;
