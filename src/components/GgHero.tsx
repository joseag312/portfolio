function GgHero() {
  return (
    <div className='px-4 py-5 text-center section' id='About'>
      <img
        className='d-block mx-auto mb-4'
        src='https://i.ibb.co/nzrLVz8/Logo2.png'
        alt=''
        width=''
        height={72}
      />
      <h2 className='display-5 fw-bold'>About</h2>
      <div className='col-lg-6 mx-auto'>
        <p className='lead mb-4'>
          We're the team who bring your web designs to life!
          <br />
          With over 10+ years of shared experence we focus on a set of diverse
          technologies to meet your business needs.
        </p>
      </div>
    </div>
  );
}

export default GgHero;
