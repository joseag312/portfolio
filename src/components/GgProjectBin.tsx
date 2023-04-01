import { useState } from "react";
import GgCarousel from "./GgCarousel";
import GgHexagonLoader from "./GgHexagonLoader";

interface ProjectProps {
  title1: string;
  caption1: string;
  img1: string;
  caption1vhX: string;
  caption1vhY: string;
  title2?: string;
  caption2?: string;
  img2?: string;
  caption2vhX?: string;
  caption2vhY?: string;
  title3?: string;
  caption3?: string;
  img3?: string;
  caption3vhX?: string;
  caption3vhY?: string;
}

function GgProjectBin() {
  const [status, setStatus] = useState("inactive");
  const [sourceData, setSourceData] = useState<ProjectProps>({
    title1: "Coming soon!",
    caption1: "Stay tuned...",
    img1: "",
    caption1vhX: "50vw",
    caption1vhY: "50vh",
  });

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    setStatus("hover");
  }

  function handleDragLeave(e: React.DragEvent) {
    setStatus("inactive");
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault;
    const eventSourceData = e.dataTransfer.getData("props");
    setSourceData(JSON.parse(eventSourceData));
    setStatus("active");
  }

  const loadProject = function () {
    setStatus("loaded");
  };

  let spinner;
  if (status == "active") {
    spinner = (
      <div className='d-flex h-100 flex-column align-items-center justify-content-center'>
        <GgHexagonLoader />
      </div>
    );
    setTimeout(loadProject, 1000);
  }

  let project;
  if (status == "loaded") {
    project = (
      <GgCarousel
        title1={sourceData.title1}
        caption1={sourceData.caption1}
        img1={sourceData.img1}
        caption1vhX={sourceData.caption1vhX}
        caption1vhY={sourceData.caption1vhY}
      ></GgCarousel>
    );
  }

  return (
    <div className='section position-relative p-5'>
      <div
        className={`h-100 
        ${status != "loaded" ? "border rounded  " : ""} 
        ${status == "hover" ? "box-white-shadow " : ""} 
        ${status != "active" && status != "loaded" ? "border--dashed " : ""} 
        ${status == "active" ? "white-fill" : ""} `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {spinner}
        {project}
      </div>
    </div>
  );
}

export default GgProjectBin;
