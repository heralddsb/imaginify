import React from "react";
import Header from "@/components/shared/Header";
import { transformationTypes } from "@/constants";

const type = "roadmap";
const page = transformationTypes["roadmap"];
const RoadMap = () => {
  return (
    <>
      <Header title={page.title} subtitle={page.subTitle} />
      <section className="profile">
        <span>Todo!</span>
      </section>
    </>
  );
};

export default RoadMap;
