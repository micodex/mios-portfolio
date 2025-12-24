import {
  Moon,
  Sun,
  Wifi,
  Bluetooth,
  Maximize,
  Monitor,
  Volume2,
  Shield,
  type LucideIcon,
} from "lucide-react";

export type ControlType = "circular" | "wide" | "slider" | "music";

export interface ControlItem {
  id: string;
  type: ControlType;
  label?: string;
  icon?: LucideIcon;
  subtext?: string;
  defaultValue?: number;
  isActive?: boolean;
  colSpan?: string;
  rowSpan?: string;
  action?: () => void;
}

// helper actions
const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
};

export const Controls: ControlItem[] = [
  // row 1: focus mode (2x1) & music (Square)
  {
    id: "focus",
    type: "wide",
    label: "Focus",
    icon: Moon,
    isActive: true,
    colSpan: "col-span-2",
    action: () => console.log("Focus Toggled"),
  },
  {
    id: "music",
    type: "music",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
  },

  // row 2: screen mirror (2x1)
  {
    id: "mirror",
    type: "wide",
    label: "Screen",
    icon: Monitor,
    isActive: false,
    colSpan: "col-span-2",
    action: () => console.log("Mirroring..."),
  },

  // row 3: sliders (4x1)
  {
    id: "brightness",
    type: "slider",
    label: "Display",
    icon: Sun,
    defaultValue: 80,
    colSpan: "col-span-4",
  },
  {
    id: "sound",
    type: "slider",
    label: "Sound",
    icon: Volume2,
    defaultValue: 50,
    colSpan: "col-span-4",
  },

  // row 4: grid of circles
  {
    id: "wifi",
    type: "circular",
    icon: Wifi,
    isActive: true,
    colSpan: "col-span-1",
    action: () => console.log("Wifi Toggle"),
  },
  {
    id: "bluetooth",
    type: "circular",
    icon: Bluetooth,
    isActive: false,
    colSpan: "col-span-1",
    action: () => console.log("BT Toggle"),
  },
  {
    id: "fullscreen",
    type: "circular",
    icon: Maximize,
    isActive: false,
    colSpan: "col-span-1",
    action: toggleFullScreen,
  },
  {
    id: "security",
    type: "circular",
    icon: Shield,
    isActive: false,
    colSpan: "col-span-1",
    action: () => console.log("Security Check"),
  },
];
