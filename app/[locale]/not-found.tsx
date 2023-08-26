"use client";
import { PageWrapper } from "@/components/common/page-wrapper";
import React from "react";
import RiveComponent, { Alignment, Fit, Layout } from "@rive-app/react-canvas";

const NotFound = () => {
  return (
    <React.Fragment>
      <PageWrapper>
        <RiveComponent
          src="../../404.riv"
          className="h-screen max-h-[30rem]"
          layout={
            new Layout({
              fit: Fit.Contain,
              alignment: Alignment.TopCenter,
            })
          }
        />
      </PageWrapper>
    </React.Fragment>
  );
};
export default NotFound;
