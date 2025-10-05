"use client";

import { useAtom } from "jotai";
import { ActiveSideBarItem } from "../configs/constants";

const useSidebar = () => {
  const [ActiveSidebar, setActiveSidebar] = useAtom(ActiveSideBarItem);
  return { ActiveSidebar, setActiveSidebar };
};

export default useSidebar;
