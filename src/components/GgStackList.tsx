interface StackType {
  type: string;
}

function GgStackList({ type }: StackType) {
  let iconDescs: string[] = [];
  let imgPaths: string[] = [];

  if (type == "front") {
    iconDescs = ["React", "Bootstrap", "TypeScript", "Sass"];
    imgPaths = ["/react.png", "/bootstrap.png", "/typescript.png", "/sass.png"];
  } else if (type == "back") {
    iconDescs = ["Java", "Spring", "Python", "SQL"];
    imgPaths = ["/java.png", "/spring.png", "/python.png", "/sql.png"];
  } else if (type == "ops") {
    iconDescs = ["AWS", "Linux", "TomCat"];
    imgPaths = ["/aws.png", "/linux.png", "/tomcat.png", "/sass.png"];
  }

  return (
    <>
      {iconDescs.map((iconDesc, index) => (
        <div
          key={iconDesc}
          className='h-20 w-100 d-flex flex-row align-items-center justify-content-around'
        >
          <div className='w-60 d-flex flex-row justify-content-center align items-center'>
            <img
              className='d-block white-shadow h-100'
              src={imgPaths[index]}
              alt=''
              width=''
            />
          </div>
          <div className='w-40 text-left'>
            <p className='hexagon-subtitle white-shadow m-0'>{iconDesc}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default GgStackList;
