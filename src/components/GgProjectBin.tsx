import { useState } from "react";
import GgHexagonLoader from "./GgHexagonLoader";

function GgProjectBin() {
  const [binStatus, setBinStatus] = useState("inactive");
  const [projectName, setProjectName] = useState("");

  // Event listeners
  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    setBinStatus("hover");
  }

  function handleDragLeave(e: React.DragEvent) {
    setBinStatus("inactive");
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault;
    setBinStatus("loading");
    setProjectName(JSON.parse(e.dataTransfer.getData("props")).projectName);
  }

  let data;
  if (binStatus == "loading") {
    fetch(
      "https://api.github.com/repos/joseag312/" +
        projectName +
        "/contents/portfolio.json"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  // Conditional Display
  let spinner;
  if (binStatus == "loading") {
    spinner = (
      <div className='d-flex h-100 flex-column align-items-center justify-content-center'>
        <GgHexagonLoader />
      </div>
    );
  }

  // let project;
  // if (binStatus == "loaded") {
  //   project = (
  //     <GgCarousel
  //       title1={data.title1}
  //       caption1={data.caption1}
  //       img1={data.img1}
  //       position1={data.position1}
  //     ></GgCarousel>
  //   );
  // }

  return (
    <div className='section position-relative p-5'>
      <div
        className={`h-100 border rounded 
        ${binStatus == "hover" ? "box-white-shadow " : ""} 
        ${
          binStatus != "loading" && binStatus != "loaded"
            ? "border--dashed "
            : ""
        } 
        ${binStatus == "loading" ? "white-fill " : ""} 
        ${binStatus == "loaded" ? "white-fill-2" : ""} `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {spinner}
        {/* {project} */}
      </div>
    </div>
  );
}

export default GgProjectBin;
