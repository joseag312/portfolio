import GgProject from "./GgProject";

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
      <div className='h-100 w-100 mx-4 px-4 d-flex flex-row flex-wrap align-items-center justify-content-start'>
        {repos.map((repoName) => (
          <GgProject key={`${repoName}`} projectName={`${repoName}`} />
        ))}
      </div>
    </div>
  );
}

export default GgProjectList;
