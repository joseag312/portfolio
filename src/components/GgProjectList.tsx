import { useQuery } from "react-query";
import GgProject from "./GgProject";

function GgProjectList() {
  let repos: string[] = [];
  const getFacts = async () => {
    const res = await fetch("https://api.github.com/users/joseag312/repos");
    return res.json();
  };
  const { data, status } = useQuery([], getFacts);

  if (status == "success") {
    data.map((result: any) => {
      if (result.name != "joseag312") {
        repos.push(result.name);
      }
    });
  }

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
        {repos.map((repoName) => (
          <GgProject projectName={`${repoName}`} />
        ))}
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default GgProjectList;
