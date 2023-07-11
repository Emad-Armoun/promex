import { useEffect, useState } from "react";
import { Settings } from "../types/settings";
import { SETTINGS_KEY } from "./constants";

export const useSettings = () => {
  const [settings, setSettings] = useState<Settings>();

  useEffect(() => {
    const storedSettings = localStorage.getItem(SETTINGS_KEY);
    if (storedSettings) {
      setSettings(JSON.parse(storedSettings));
    }
  }, []);

  return settings;
};
