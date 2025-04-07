import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { communityInsightNews } from './DataCommunityInsight';
import './style.css';
import { useRef } from 'react';

export default function CommunityInsight() {
  const sliderRef = useRef(null);

  const link = [
    {
      label: 'All',
      slug: '/blog'
    },
    {
      label: 'News',
      slug: '/blog'
    },
    {
      label: 'Blog',
      slug: '/blog'
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  const goToPrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  return (
    <div className="pt-[40px] relative overflow-hidden sm:pt-[80px] pb-[80px] sm:pb-[120px]">
      <div className="w-[530.69px] h-[648.20px] absolute -left-[10%] top-[10%] origin-top-left rotate-[-75deg] bg-sky-600/20 rounded-[100px] blur-[240px]" />
      <div className="w-[530.69px] h-[648.20px] absolute -right-[10%] top-[10%] origin-top-left rotate-[-75deg] bg-sky-600/20 rounded-[100px] blur-[240px]" />
      <div className="w-[530.69px] h-[648.20px] absolute -left-[20%] -bottom-[100%] origin-top-left rotate-[-75deg] bg-sky-600/20 rounded-[100px] blur-[240px]" />
      <div className="w-[530.69px] h-[648.20px] absolute right-[15%] -bottom-[100%] origin-top-left rotate-[-75deg] bg-sky-600/40 rounded-[100px] blur-[240px]" />

      <div className="px-5 mx-auto max-w-[651px] min-h-[126px] relative z-10">
        <div className="boxed_round_fonts text-center bg-clip-text bg-[linear-gradient(120deg,#0080FF_56.64%,#00D9D9_76.56%)] leading-[70px] max-md:text-4xl max-md:leading-[50px]">
          <span className="relative text-white whitespace-normal md:whitespace-nowrap z-[999999]">Community</span> <span className="relative gradient-text">Insight</span>
        </div>
        <p className="text-center sub-heading text-white mt-2 sm:mt-4">Stay informed with our latest news and community-driven resources.</p>
      </div>
      <div className="pl-[16px] pr-[16px] sm:pr-0 lg:pl-[120px] relative z-10 flex justify-between flex-col lg:flex-row gap-16 lg:gap-24 mt-10">
        <div className="w-full pt-[40px] md:pt-[75px]">
          <h2 className="text-[#B7BAC0] font-['Tahoma'] uppercase text-sm mb-5">Quick links</h2>
          <ul className="flex flex-col gap-3">
            {link.map((links, i) => (
              <li key={i}>
                <Link to={links.slug} className="text-white text-base font-['BoxedRound'] font-bold flex items-center justify-start h-[40px]">
                  {links.label}
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity={0.5}>
                      <path d="M15.1811 8.81445L8.81909 15.1805" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.87769 8.81613L15.181 8.81445L15.1827 14.1178" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-full sm:max-w-[1000px]">
          <div className="button-slider">
            <svg className="cursor-pointer rotate-180 next-button" onClick={goToPrevious} width={44} height={44} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M26.4822 14.5294C25.9873 14.0345 25.1936 14.0345 24.6987 14.5294C24.2038 15.0243 24.2038 15.818 24.6987 16.3129L29.1342 20.7484H11.8218C11.1214 20.7484 10.5612 21.3087 10.5612 22.009C10.5612 22.7093 11.1214 23.2696 11.8218 23.2696H29.1342L24.708 27.6958C24.2131 28.1907 24.2131 28.9844 24.708 29.4793C24.9508 29.7221 25.2776 29.8528 25.5951 29.8528C25.9126 29.8528 26.2394 29.7314 26.4822 29.4793L33.0654 22.8961C33.5603 22.4012 33.5603 21.6075 33.0654 21.1126L26.4822 14.5294Z"
                fill="white"
              />
              <circle cx={22} cy={22} r={19.5} stroke="white" />
            </svg>
            <svg className="cursor-pointer next-button" onClick={goToNext} width={44} height={44} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M26.4822 14.5294C25.9873 14.0345 25.1936 14.0345 24.6987 14.5294C24.2038 15.0243 24.2038 15.818 24.6987 16.3129L29.1342 20.7484H11.8218C11.1214 20.7484 10.5612 21.3087 10.5612 22.009C10.5612 22.7093 11.1214 23.2696 11.8218 23.2696H29.1342L24.708 27.6958C24.2131 28.1907 24.2131 28.9844 24.708 29.4793C24.9508 29.7221 25.2776 29.8528 25.5951 29.8528C25.9126 29.8528 26.2394 29.7314 26.4822 29.4793L33.0654 22.8961C33.5603 22.4012 33.5603 21.6075 33.0654 21.1126L26.4822 14.5294Z"
                fill="white"
              />
              <circle cx={22} cy={22} r={19.5} stroke="white" />
            </svg>
          </div>
          <div className="mt-4 relative sm:-right-[50px]">
            <Slider ref={sliderRef} {...settings}>
              {communityInsightNews.map((item, i) => (
                <div key={i} className="w-[288.09px] min-h-[343.81px] p-3">
                  <div className="w-full bg-[#0C162C] rounded-[8px] overflow-hidden">
                    <div className="w-full min-h-[190px]">
                      <img src={item.blogImg} alt="" className="w-full h-full" />
                    </div>
                    <div className="w-full min-h-[152px] bg-[#B7BAC0]/10 p-[24px] pt-[30px]">
                      <span className="bg-[#B7BAC0]/10 text-base font-['AdventPro-Regular'] rounded-[4px] p-2 w-[80.58px] text-[#B7BAC0] min-h-[26px]">{item.cat}</span>
                      <p className="text-lg font-['AdventPro-Regular'] tracking-[2px] text-white font-semibold mt-3">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
