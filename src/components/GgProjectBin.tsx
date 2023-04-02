import { useState } from "react";
import GgCarousel from "./GgCarousel";
import GgHexagonLoader from "./GgHexagonLoader";

function GgProjectBin() {
  const [binStatus, setBinStatus] = useState("inactive");
  const [projectName, setProjectName] = useState("");
  const [projectData, setProjectData] = useState({});

  const projectList: any = {
    project1: {
      variant: "dark",
      title1: "Project 1",
      caption1: "Caption 1",
      img1: "https://i.ibb.co/hZp03Rs/desktop-large2.jpg",
      position1: "middle",
      color1: "dark",
      title2: "Project 1",
      caption2: "Caption 2",
      img2: "https://i.ibb.co/VSzk3PM/paint-web.jpg",
      position2: "bottom",
      color2: "light",
      title3: "Project 1",
      caption3: "Caption 3",
      img3: "https://i.ibb.co/vHKWrn7/one-click-away.jpg",
      position3: "top",
      color3: "dark",
    },
    project2: {
      variant: "dark",
      title1: "Project 2",
      caption1: "Caption 1",
      img1: "https://i.ibb.co/hZp03Rs/desktop-large2.jpg",
      position1: "middle",
      color1: "dark",
      title2: "Project 2",
      caption2: "Caption 2",
      img2: "https://i.ibb.co/VSzk3PM/paint-web.jpg",
      position2: "bottom",
      color2: "light",
      title3: "Project 2",
      caption3: "Caption 3",
      img3: "https://i.ibb.co/vHKWrn7/one-click-away.jpg",
      position3: "top",
      color3: "dark",
    },
    project3: {
      variant: "dark",
      title1: "Project 3",
      caption1: "Caption 1",
      img1: "https://i.ibb.co/hZp03Rs/desktop-large2.jpg",
      position1: "middle",
      color1: "dark",
      title2: "Project 3",
      caption2: "Caption 2",
      img2: "https://i.ibb.co/VSzk3PM/paint-web.jpg",
      position2: "bottom",
      color2: "light",
      title3: "Project 3",
      caption3: "Caption 3",
      img3: "https://i.ibb.co/vHKWrn7/one-click-away.jpg",
      position3: "top",
      color3: "dark",
    },
  };

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
    setTimeout(buildProjectLocal, 2500);
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
        <GgHexagonLoader />
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
