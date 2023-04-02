import GgProject from "./GgProject";

function GgProjectList() {
  let repos: string[] = ["project1", "project2", "project3"];
  // const getFacts = async () => {
  //   const res = await fetch("https://api.github.com/users/joseag312/repos");
  //   return res.json();
  // };

  // const { data, status } = useQuery([], getFacts);
  // if (status == "success") {
  //   data.map((result: any) => {
  //     try {
  //       fetch(
  //         "https://api.github.com/repos/joseag312/" +
  //           result.name +
  //           "/contents/portfolio.json"
  //       ).then((response) => {
  //         if (response.status == 200) {
  //           repos.push(result.name);
  //         }
  //       });
  //     } catch (error) {
  //       console.log("No portfolio in " + result.name);
  //     }
  //   });
  // }

  return (
    <div className='h-100 w-100 d-flex flex-row align-items-center justify-content-around position-relative'>
      <div className='w-50 text-center'>
        <p className='hexagon-title white-shadow text-light'>My handiwork 🥽</p>
        <p className='white-shadow text-light text-center'>Drag and drop!</p>
      </div>
      <div className='h-100 w-50 d-flex flex-row align-items-center justify-content-around'>
        {repos.map((repoName) => (
          <GgProject key={`${repoName}`} projectName={`${repoName}`} />
        ))}
      </div>
    </div>
  );
}

export default GgProjectList;
