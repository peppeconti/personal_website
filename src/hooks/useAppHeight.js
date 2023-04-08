import { useEffect } from "react";

const useAppHeight = (ref) => {
  useEffect(() => {
    const appHeight = () => {
      ref.current.style.setProperty("--app-height", `${window.innerHeight}px`);
    };

    window.addEventListener("resize", appHeight);
    appHeight();
  }, []);
};

export { useAppHeight };
