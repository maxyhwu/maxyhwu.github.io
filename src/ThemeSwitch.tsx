import React, { useState } from "react";
import { Switch } from "@mui/material";

const ThemeSwitch: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleModeChange = () => {
    setDarkMode(!darkMode);
    // Add logic here to toggle between light and dark mode in your application
  };

  return (
    <Switch
      checked={darkMode}
      onChange={handleModeChange}
      color="primary"
      name="darkModeSwitch"
      inputProps={{ "aria-label": "toggle dark mode" }}
    />
  );
};

export default ThemeSwitch;
