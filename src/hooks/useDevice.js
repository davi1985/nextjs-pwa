import { debounce } from "lodash";
import { useEffect, useState } from "react";

export const useDevice = () => {
  const [device, setDevice] = useState(undefined);

  useEffect(() => {
    const viewport = () => {
      const width = window.innerWidth;

      if (width <= 500) {
        setDevice("mobile");
      }

      if (width >= 501) {
        setDevice("tablet");
      }

      if (width >= 1024) {
        setDevice("desktop");
      }
    };

    const debouncedConvert = debounce(viewport, 100);

    viewport();

    window.addEventListener("resize", debouncedConvert);

    return () => {
      window.removeEventListener("resize", debouncedConvert);
    };
  }, []);

  return { device };
};
