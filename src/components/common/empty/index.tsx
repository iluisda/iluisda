"use client";
import RiveComponent, { Alignment, Fit, Layout } from "@rive-app/react-canvas";

const EmptyAnimation = () => {
  return (
    <RiveComponent
      src="../../floating_astro.riv"
      className="h-screen max-h-[30rem]"
      layout={
        new Layout({
          fit: Fit.Contain,
          alignment: Alignment.TopCenter,
        })
      }
    />
  );
};
export default EmptyAnimation;
