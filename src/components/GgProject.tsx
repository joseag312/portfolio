import GgHexagonSVG from "./GgHexagonSVG";

interface Props {
  title1: string;
  caption1: string;
  img1: string;
  title2?: string;
  caption2?: string;
  img2?: string;
  title3?: string;
  caption3?: string;
  img3?: string;
}

function GgProject() {
  return (
    <>
      <GgHexagonSVG></GgHexagonSVG>
    </>
  );
}

export default GgProject;
