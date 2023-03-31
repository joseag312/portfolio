import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function GgCarousel() {
  return (
    <div className='section'>
      <Carousel interval={10000} pause={false} variant='dark'>
        <Carousel.Item>
          <Image
            src={"https://i.ibb.co/hZp03Rs/desktop-large2.jpg"}
            fluid={true}
            className='section'
          ></Image>
          <Carousel.Caption className='carousel-caption-middle'>
            <h3>Let's work together</h3>
            <p>How do you take your coffee?</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={"https://i.ibb.co/VSzk3PM/paint-web.jpg"}
            fluid={true}
            className='section'
          ></Image>
          <Carousel.Caption className='carousel-caption-bottom'>
            <h3 className='text-light'>Second slide label</h3>
            <p className='text-light'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={"https://i.ibb.co/vHKWrn7/one-click-away.jpg"}
            fluid={true}
            className='section'
          ></Image>
          <Carousel.Caption className='carousel-caption-top'>
            <h3 className='text-dark'>Third slide label</h3>
            <p className='text-dark'>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default GgCarousel;
