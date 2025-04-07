import '../style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';
// import { sliderData } from './sliderData';

export default function Hero() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   autoplay: true,
  //   speed: 1000,
  //   autoplaySpeed: 5000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };

  return (
    <div className="hero-slider-img">
      <div className="relative w-full min-h-[450px] sm:min-h-[550px] md:min-h-[650px] flex items-center justify-center">
        <div className="absolute bg-black/50 z-10 top-0 left-0 w-full h-full" />
        <img src="/community-slide/community-slide1.png" alt="" className="w-full h-full object-cover absolute top-0 left-0 z-0" />
        <div className="relative top-3 z-10 flex items-center justify-center text-white p-4">
          <div className="mx-auto max-w-[1095px] relative text-center">
            <span className="text-white text-[32px] sm:text-[48px] md:text-[58px] font-bold font-['BoxedRound'] leading-[38px] sm:leading-[60px] md:leading-[80px]">
              This isn't just a journey; it's a{' '}
              <span className="gradient-text relative text-[32px] sm:text-[48px] md:text-[58px] font-bold font-['BoxedRound'] leading-[38px] sm:leading-[60px] md:leading-[80px]">
                revolution
                <div className="gradient-background absolute left-[3px] leading-[58px] bottom-0 w-[100%] h-[4px]"></div>
              </span>
              . Join us to build the future, one block at a time.
            </span>
          </div>
        </div>
      </div>

      {/* <Slider {...settings}>
        {sliderData.map((item, i) => (
          <div
            key={i}
            className="relative w-full min-h-[450px] sm:min-h-[550px] md:min-h-[650px] flex items-center justify-center"
          >
            <div className="absolute bg-black/50 z-10 top-0 left-0 w-full h-full" />
            <img
                src={item.bgImg}
                alt=""
                className="w-full h-full object-cover absolute top-0 left-0 z-0"
              />
              <div className="relative top-3 sm:top-16 md:-top-10 z-10 text-center text-white p-4">
                {item.content}
              </div>
          </div>
        ))}
      </Slider> */}
    </div>
  );
}
