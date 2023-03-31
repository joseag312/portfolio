import { useState } from "react";

function GgProjectBin() {
  const [status, setStatus] = useState("inactive");

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault;
    if (status == "inactive") {
      setStatus("hover");
    }
  }

  function handleDragLeave(e: React.DragEvent) {
    e.preventDefault;
    if (status == "hover") {
      setStatus("inactive");
    }
  }

  return (
    <div className='section position-relative p-5'>
      <div
        className={`h-100 border border--dashed rounded ${
          status == "hover" ? "box-white-shadow" : ""
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      ></div>
    </div>
  );
}

export default GgProjectBin;
