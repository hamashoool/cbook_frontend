import { useEffect, useState } from "react";
import { useSiteMachine } from "./useSiteMachine";

export const useSidebarToggle = () => {
  const { state, send } = useSiteMachine();
  const [isOpen, setIsOpen] = useState(state.context.isOpen);

  useEffect(() => {
    setIsOpen(state.context.isOpen);
    console.log("useEffect", state.context.isOpen);
  }, [state.context.isOpen]);

  const toggleNav = () => {
    send("TOGGLENAV");
  };

  return { isOpen, toggleNav };
};
