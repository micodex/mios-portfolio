import { useOS } from "@/context/useOS";

import { navLinks } from "@/data/navbar";
import {
  Bluetooth,
  BluetoothOff,
  Search,
  SquareMenu,
  Volume2,
  Wifi,
  WifiOff,
} from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { state, dispatch } = useOS();

  const activeApp = state.apps.find((app) => app.id === state.activeAppId);
  const ccOpen = state.systemStatus.ccOpen; // is control center open
  const title = activeApp ? activeApp.title : "Desktop";

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  const iconSize: number = 20;

  return (
    <nav>
      <div className="flex">
        <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="logo" />
        {/* active app */}
        <span className="hover-effect font-bold">{title}</span>

        <ul className="nav-lists">
          {navLinks.map(({ name }) => (
            <li key={name}>
              <span className="hover-effect">{name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* task icons and time & date */}
      <div>
        <ul className="task-icons">
          <li>
            <Search size={iconSize} />
          </li>
          {state.systemStatus.wifi ? (
            <li>
              <Wifi size={iconSize} />
            </li>
          ) : (
            <li>
              <WifiOff size={iconSize} />
            </li>
          )}

          {state.systemStatus.bluetooth ? (
            <li>
              <Bluetooth size={iconSize} />
            </li>
          ) : (
            <li>
              <BluetoothOff size={iconSize} />
            </li>
          )}

          {state.systemStatus.playing ? (
            <li>
              <Volume2 size={iconSize} />
            </li>
          ) : null}
          {
            <li
              onClick={() => dispatch({ type: "TOGGLE_CC" })}
              className={ccOpen ? "opened" : ""}
            >
              <SquareMenu size={iconSize} />
            </li>
          }
        </ul>
        <time>
          {formatDate(time)} &nbsp; {formatTime(time)}
        </time>
      </div>
    </nav>
  );
};

export default Navbar;
