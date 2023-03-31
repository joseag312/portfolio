import GgHexagonSVG from "./GgHexagonSVG";

function GgProjectList() {
  return (
    <div className='section d-flex flex-column align-items-center justify-content-start position-relative'>
      <br></br>
      <br></br>
      <br></br>
      <p className='white-shadow text-light text-center'>
        Some of my handiwork 🥽
        <br></br>
        Drag and drop!
      </p>
      <div className='h-100 d-flex flex-column align-items-center justify-content-around'>
        <GgHexagonSVG></GgHexagonSVG>
        <GgHexagonSVG></GgHexagonSVG>
        <GgHexagonSVG></GgHexagonSVG>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default GgProjectList;
