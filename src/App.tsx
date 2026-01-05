import "@/index.css";

import Dock from "@/components/system/Dock";
import Window from "@/components/system/Window";
import Navbar from "@/components/system/Navbar";
import ControlCenter from "./components/system/ControlCenter/ControlCenter";

import { useOS } from "@/context/useOS";

function Desktop() {
  const { state } = useOS();

  return (
    <div className="font-georama">
      {/* control center */}
      <ControlCenter />

      {/* navigation */}
      <Navbar />

      {/* windows layer */}
      {state.apps.map((app) => (
        <Window key={app.id} app={app} />
      ))}

      {/* Dock */}
      <Dock />
    </div>
  );
}

export default Desktop;
