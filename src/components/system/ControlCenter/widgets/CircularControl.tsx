import { type ControlItem } from "../controls.config";
import { useOS } from "@/context/useOS";

// circualr control (1x1)
export const CircularControl = ({ data }: { data: ControlItem }) => {
  const { state, dispatch } = useOS();
  const Icon = data.icon;

  const active =
    data.id === "wifi"
      ? state.systemStatus.wifi
      : data.id === "bluetooth"
      ? state.systemStatus.bluetooth
      : data.id === "lock"
      ? state.systemStatus.lock
      : false;

  const handleClick = () => {
    if (data.id === "wifi") {
      dispatch({ type: "TOGGLE_WIFI" });
    } else if (data.id === "bluetooth") {
      dispatch({ type: "TOGGLE_BLUETOOTH" });
    } else if (data.id === "lock") {
      dispatch({ type: "TOGGLE_LOCKSCREEN" });
    } else if (data.id === "fullscreen") {
      data.action && data.action();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        liquid-glass h-16 w-16 rounded-full flex items-center justify-center
        ${
          active
            ? "bg-white text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            : "bg-black/10 text-white"
        }
      `}
    >
      {Icon ? <Icon size={24} /> : null}
    </button>
  );
};

export default CircularControl;
