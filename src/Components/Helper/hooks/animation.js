import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.4 });
  if (view) {
    controls.start("onScreen");
  } else {
    controls.stop("offScreen");
  }

  return [element, controls];
};
