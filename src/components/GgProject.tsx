interface ProjectProps {
  projectName: string;
}

function GgProject(props: ProjectProps) {
  let propsStr = JSON.stringify(props);
  let image = new Image();
  image.src = "/project-logo.svg";

  function handleDrag(e: React.DragEvent<HTMLDivElement>) {
    e.dataTransfer.setData("props", propsStr);
    e.dataTransfer.setDragImage(image, 25, 25);
  }

  return (
    <div
      className='project-icon widget m-2--responsive'
      draggable={true}
      onDragStart={handleDrag}
      data-source-data={`${propsStr}`}
    >
      <svg
        className='hexagon-project'
        fill='teal'
        viewBox='0 0 16 16'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M8 8v5h4V8h-2V6H8v2zm-8 8h16V0H0v16zm2-2V2h12v12H2zM8 4h2V2H8v2zm2 2h2V4h-2v2zm-1 6v-2h2v2H9z' />
      </svg>
    </div>
  );
}

export default GgProject;
