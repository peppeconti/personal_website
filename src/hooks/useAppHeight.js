import { useCallback, useEffect } from "react";

const useAppHeight = (ref) => {

  const appHeight = useCallback(() => {
    ref.current.style.setProperty("--app-height", `${window.innerHeight}px`);
  }, [ref])

  useEffect(() => {

    window.addEventListener("resize", appHeight);
    appHeight();

  }, [appHeight]);
};

export { useAppHeight };
