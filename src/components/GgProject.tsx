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

function GgProject(props: ProjectProps) {
  let propsStr = JSON.stringify(props);

  function handleDrag(e: React.DragEvent) {
    e.dataTransfer.setData("props", propsStr);
  }

  return (
    <div
      className='white-shadow widget'
      draggable={true}
      onDragStart={handleDrag}
      data-source-data={`${propsStr}`}
    >
      <svg
        fill='teal'
        height='80px'
        width='80px'
        version='1.1'
        id='Capa_1'
        xmlns='http://www.w3.org/2000/svg'
        stroke='black'
        viewBox='0 0 490 490'
        dur={"0.5s"}
      >
        <g>
          <path
            d='M466.032,367.5v-245L245,0L23.968,122.5v245L245,490L466.032,367.5z M118.865,175.094L245,105.188l126.136,69.906v139.813
		L245,384.813l-126.135-69.906V175.094z'
          />
          <polygon points='331.299,292.828 331.299,197.172 245,149.343 158.701,197.172 158.701,292.828 245,340.657 	' />
        </g>
      </svg>
    </div>
  );
}

export default GgProject;
