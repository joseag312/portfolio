import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

interface ProjectProps {
  title1: string;
  caption1: string;
  img1: string;
  position1: string;
  title2?: string;
  caption2?: string;
  img2?: string;
  position2?: string;
  title3?: string;
  caption3?: string;
  img3?: string;
  position3?: string;
}

function GgCarousel(props: ProjectProps) {
  let slide1: any;
  let slide2: any;
  let slide3: any;

  if (props.title1) {
    slide1 = (
      <Carousel.Item className='h-100'>
        <Image src={props.img1} fluid={true} className='h-100'></Image>
        <Carousel.Caption className='carousel-caption-middle'>
          <h3>{props.title1}</h3>
          <p>{props.caption1}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  if (props.title2) {
    slide2 = (
      <Carousel.Item className='h-100'>
        <Image src={""} fluid={true} className='h-100'></Image>
        <Carousel.Caption className='carousel-caption-bottom'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  if (props.title3) {
    slide3 = (
      <Carousel.Item className='h-100'>
        <Image src={""} fluid={true} className='h-100'></Image>
        <Carousel.Caption className='carousel-caption-top'>
          <h3>Third slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  return (
    <div className='h-100 positon-relative'>
      <Carousel interval={2500} pause={false} className='h-100'>
        {slide1}
        {slide2}
        {slide3}
      </Carousel>
    </div>
  );
}

export default GgCarousel;
