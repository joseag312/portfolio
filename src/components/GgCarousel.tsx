import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function GgCarousel() {
  return (
    <div className='h-100 positon-relative'>
      <Carousel interval={2500} pause={false} className='h-100'>
        <Carousel.Item className='h-100'>
          <Image src={""} fluid={true} className='h-100'></Image>
          <Carousel.Caption className='carousel-caption-middle'>
            <h3>First slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='h-100'>
          <Image src={""} fluid={true} className='h-100'></Image>
          <Carousel.Caption className='carousel-caption-bottom'>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='h-100'>
          <Image src={""} fluid={true} className='h-100'></Image>
          <Carousel.Caption className='carousel-caption-top'>
            <h3>Third slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default GgCarousel;
