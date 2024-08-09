"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { DateTime } from "luxon";
import { ModeToggle } from "@/components/ThemeSwitcher";

// https://github.com/streamich/react-use/blob/master/src/useInterval.ts
const useInterval = (callback: Function, delay?: number | null) => {
  const savedCallback = useRef<Function>(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (delay !== null) {
      const interval = setInterval(() => savedCallback.current(), delay || 0);
      return () => clearInterval(interval);
    }

    return undefined;
  }, [delay]);
};

function Overview() {
  const [mouted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const timeOption = DateTime.TIME_SIMPLE;
  timeOption.hour12 = true;
  const [timeString, setTimeString] = useState(
    DateTime.now().setLocale("en-US").toLocaleString(timeOption),
  );

  useInterval(() => {
    setTimeString(DateTime.now().setLocale("en-US").toLocaleString(timeOption));
  }, 1000);

  return (
    <section className={"mt-10 flex flex-col md:mt-16"}>
      <p className="text-md font-semibold">👋 HH_VPS Status</p>
      <div className="flex items-center gap-1.5">
        <p className="text-sm font-medium opacity-50">Current Time: </p>
        {mouted && (
          <p className="opacity-1 text-sm font-medium">{timeString}</p>
        )}
      </div>
    </section>
  );
  return (
    <div className="mx-auto w-full max-w-5xl">
      <section className="flex items-center justify-between">
        <ModeToggle />
      </section>
      <Overview />
    </div>
  );  
}

export default Header;
