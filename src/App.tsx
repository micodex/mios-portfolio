import "@/index.css";

import Window from "@/components/system/Window";
import Navbar from "@/components/system/Navbar";
import Dock from "@/components/system/Dock";

import { useOS } from "@/context/OSContext";

function Desktop() {
  const { state } = useOS();

  return (
    <div className="font-georama">
      {/* navigation */}
      <Navbar />

      {/* Windows Layer */}
      {state.apps.map((app) => (
        <Window key={app.id} app={app} />
      ))}

      {/* Dock */}
      <Dock />
    </div>
  );
}

export default Desktop;
