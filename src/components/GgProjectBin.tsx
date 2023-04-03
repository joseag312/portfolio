import { useState } from "react";
import GgCarousel from "./GgCarousel";
import GgHexagonLoader from "./GgHexagonLoader";
import { PROJECT_CONFIG } from "./GgProjectConfig";

function GgProjectBin() {
  const [binStatus, setBinStatus] = useState("inactive");
  const [projectName, setProjectName] = useState("");
  const [projectData, setProjectData] = useState({});

  const projectList: any = PROJECT_CONFIG;

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

  function buildProjectLocal() {
    setProjectData(projectList.projectName);
    setBinStatus("loaded");
  }

  // Cool svg let it run
  if (binStatus == "loading") {
    setTimeout(buildProjectLocal, 3500);
  }

  // Fetch portfolio.json from selected project
  // function buildProject() {
  //   fetch(
  //     "https://api.github.com/repos/joseag312/" +
  //       projectName +
  //       "/contents/portfolio.json"
  //   )
  //     .then((response) => response.json())
  //     .then((response) => atob(response.content))
  //     .then((response) => JSON.parse(response))
  //     .then((response) => {
  //       setProjectData(response);
  //       setBinStatus("loaded");
  //     });
  // }

  // Conditional Display
  let spinner;
  if (binStatus == "loading") {
    spinner = (
      <div className='d-flex h-100 flex-column align-items-center justify-content-center'>
        <div className='hexagon-loader'>
          <GgHexagonLoader />
        </div>
      </div>
    );
  }

  let project;
  if (binStatus == "loaded") {
    let data: any = projectList[projectName];
    project = (
      <GgCarousel
        variant={data.variant}
        title1={data.title1}
        caption1={data.caption1}
        img1={data.img1}
        position1={data.position1}
        color1={data.color1}
        title2={data.title2}
        caption2={data.caption2}
        img2={data.img2}
        position2={data.position2}
        color2={data.color2}
        title3={data.title3}
        caption3={data.caption3}
        img3={data.img3}
        position3={data.position3}
        color3={data.color3}
      ></GgCarousel>
    );
  } else if (binStatus != "loading") {
    project = (
      <div className='h-100 w-100 d-flex flex-column align-items-center justify-content-center text-center'>
        <p className='hexagon-title white-shadow text-light'>My handiwork 🥽</p>
        <p className='white-shadow text-light text-center'>
          Drag and drop to see a project
        </p>
      </div>
    );
  }

  return (
    <div className='h-100 position-relative p-5'>
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
        {project}
      </div>
    </div>
  );
}

export default GgProjectBin;
