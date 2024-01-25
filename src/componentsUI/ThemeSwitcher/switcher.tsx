"use client";

import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import React, { ReactNode, useEffect, useState } from "react";
import { SunIcon } from "@/subComponentsUI/sunIcon";
import { MoonIcon } from "@/subComponentsUI/moonIcon";

const Switcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSwitch = (isSelected: boolean, classname: string): ReactNode => {
    if (isSelected) {
      setTheme("light");
      return <SunIcon className={classname} />;
    } else {
      setTheme("dark");
      return <MoonIcon className={classname} />;
    }
  };

  if (!mounted) return null;
  return (
    <Switch
      defaultSelected={theme === "dark" ? true : false}
      size="lg"
      thumbIcon={({ isSelected, className }) =>
        handleSwitch(isSelected, className)
      }
    />
  );
};

export default Switcher;
