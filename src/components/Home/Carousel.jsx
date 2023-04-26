import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import airpods from "./images/airpods.jpg";
import airtag from "./images/airtag.jpg";
import hero_iphone from "./images/hero_iphone.jpg";

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block mx-auto w-80"
          src={ airpods }
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 className='text-black'>Magisch liegt in der Familie</h2>
          <p className='text-black' style={{ fontSize: '20px' }}>Sieh dir alle AirPods an und finde genau die richtigen für dich.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block mx-auto w-80"
          src={ airtag }
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2 className='text-black'>AirTag</h2>
          <p className='text-black' style={{ fontSize: '20px' }}>Wenn du deine Schlüssel verlierst, kannst du sie einfach mit der „Wo ist?“ App suchen.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto w-80"
          src={ hero_iphone }
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2 className='text-black'>Das Pro Plus Ultra</h2>
          <p className='text-black' style={{ fontSize: '20px' }}>
            Ab 54,12 €/Monat oder 1.299 € vor Inzahlungnahme
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;