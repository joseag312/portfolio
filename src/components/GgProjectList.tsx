interface ProjectProps {
  projectName: string;
}

function GgProject(props: ProjectProps) {
  let propsStr = JSON.stringify(props);

  function handleDrag(e: React.DragEvent<HTMLDivElement>) {
    e.dataTransfer.setData("props", propsStr);
    e.dataTransfer.setDragImage(e.target as Element, 35, 35);
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

function GgProjectList() {
  let repos: string[] = [
    "project1",
    "project2",
    "project3",
    "project4",
    "project5",
    "project6",
    "project7",
  ];

  return (
    <div className='h-100 w-100 d-flex flex-row align-items-center justify-content-around position-relative'>
      <div className='h-100 w-100 mx-4 px-4 d-flex flex-row flex-wrap align-items-center justify-content-start'>
        {repos.map((repoName) => (
          <GgProject key={`${repoName}`} projectName={`${repoName}`} />
        ))}
      </div>
    </div>
  );
}

export default GgProjectList;
