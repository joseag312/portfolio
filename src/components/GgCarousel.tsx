import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function GgCarousel() {
  return (
    <div className='section positon-relative'>
      <Carousel interval={2500} pause={false}>
        <Carousel.Item>
          <Image
            src={"public/img1.png"}
            fluid={true}
            className='section'
          ></Image>
          <Carousel.Caption className='carousel-caption-middle'>
            <h3 className='text-dark'>Let's work together</h3>
            <p className='text-dark'>How do you take</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={"public/img1.png"}
            fluid={true}
            className='section'
          ></Image>
          <Carousel.Caption className='carousel-caption-bottom'>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={"public/img1.png"}
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
