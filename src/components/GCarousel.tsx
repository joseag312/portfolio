import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function GCarousel() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item interval={1000}>
        <Image
          src={"https://i.ibb.co/hZp03Rs/desktop-large2.jpg"}
          fluid={true}
          className='carousel-image'
        ></Image>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Image
          src={"https://i.ibb.co/VSzk3PM/paint-web.jpg"}
          fluid={true}
          className='carousel-image'
        ></Image>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={"https://i.ibb.co/vHKWrn7/one-click-away.jpg"}
          fluid={true}
          className='carousel-image'
        ></Image>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default GCarousel;
