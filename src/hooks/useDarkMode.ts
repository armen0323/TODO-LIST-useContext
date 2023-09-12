import { useCallback, useEffect, useState } from "react";

import { EModeVariant } from "types";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === EModeVariant.Dark
  );

  useEffect(() => {
    const activeMode = localStorage.getItem("theme") as EModeVariant;
    const isDarkMode = activeMode === EModeVariant.Dark;

    setIsDarkMode(isDarkMode);
    document.documentElement.setAttribute("theme", activeMode);
    localStorage.setItem("theme", activeMode);
  }, []);

  const updateActiveMode = useCallback(() => {
    const activeMode = !isDarkMode ? EModeVariant.Dark : EModeVariant.Light;

    document.documentElement.setAttribute("theme", activeMode);
    localStorage.setItem("theme", activeMode);
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode]);

  return { isDarkMode, updateActiveMode };
};

export default useDarkMode;
