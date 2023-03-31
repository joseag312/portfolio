import { useState } from "react";
import GgCarousel from "./GgCarousel";
import GgHexagonLoader from "./GgHexagonLoader";

function GgProjectBin() {
  const [status, setStatus] = useState("inactive");

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
    setTimeout(loadProject, 6000);
  }

  let project;
  if (status == "loaded") {
    project = <GgCarousel></GgCarousel>;
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
