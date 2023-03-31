function GgHero() {
  return (
    <div
      className='section d-flex flex-column align-items-center justify-content-center position-relative'
      id='About'
    >
      <a id='#hero'></a>
      <img
        className='d-block mx-auto mb-4 white-shadow'
        src='https://i.ibb.co/nzrLVz8/Logo2.png'
        alt=''
        width=''
        height={100}
      />
      <h2 className='text-light white-shadow'>A quick rant...</h2>
      <div className='text-center px-5'>
        <p className='text-light white-shadow'>
          I'm passionate about developing robust, scalable,
          <br />
          and user-friendly software applications.
          <br />
          With experience in the full software development life cycle,
          <br />
          I thrive in dynamic environments where I can collaborate with
          <br />
          cross-functional teams to deliver innovative solutions that
          <br />
          exceed business objectives.
        </p>
      </div>
    </div>
  );
}

export default GgHero;
