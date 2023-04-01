import GgProject from "./GgProject";

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
        <GgProject
          title1='LayGoo!'
          caption1='Stay tuned...'
          caption1vhX='50vh'
          caption1vhY='50vw'
          img1=''
        />
        <GgProject
          title1='It Works!!'
          caption1='Stay tuned...'
          caption1vhX='50vh'
          caption1vhY='50vw'
          img1=''
        />
        <GgProject
          title1='Coming soon!'
          caption1='Stay tuned...'
          caption1vhX='50vh'
          caption1vhY='50vw'
          img1=''
        />
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default GgProjectList;
