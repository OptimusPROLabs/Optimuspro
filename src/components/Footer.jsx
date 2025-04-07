import { Link } from 'react-router-dom';
import footerLink from './footerLink';
import { socialData } from './data/social';

export default function Footer() {
  return (
    <div className="flex justify-center items-center px-16 py-14 w-full bg-black max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1228px] max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start pr-1.5 w-full flex-col md:flex-row max-md:max-w-full">
          {/** open */}
          <div className="flex flex-col gap-4 w-[100%] md:w-[30%]">
            <div className="flex gap-2 self-start text-base text-cyan-500">
              <img src="/logo.png" className="w-[170px] sm:w-[200px]" />
            </div>
            <div className="mt-2.5 w-full text-xl leading-8 text-stone-50">
              Optimus PRO is a community-driven Web3 ecosystem that is built on the foundation of trust, security, and transparency. It’s a decentralized space co-built by stake
              <span className="circle-text">hodlers</span> ✅like you, where every voice matters.
            </div>
            <div className="flex flex-wrap gap-5 mt-2.5">
              {socialData.map((social, index) => (
                <Link to={social.link} key={index} target="_blank">
                  <social.icon />
                </Link>
              ))}
            </div>
            <a href="mailto:hello@optimuspro.io" className="mt-1.5 text-base leading-6 text-white">hello@optimuspro.io</a>
          </div>
          {/** end */}

          <div className="flex gap-5 hidden max-md:flex-col max-md:gap-0">
            {Object.keys(footerLink).map(sectionKey => {
              const section = footerLink[sectionKey];
              return (
                <div
                  key={sectionKey}
                  className={`flex flex-col ${sectionKey !== 'company' ? 'ml-5' : ''} w-[${
                    sectionKey === 'company' ? 'full' : sectionKey === 'products' ? '45%' : sectionKey === 'community' ? '36%' : '1/5'
                  }] max-md:ml-0 max-md:w-full`}
                >
                  <div className="flex flex-col grow text-xl leading-8 text-white max-md:mt-10">
                    <div className="text-cyan-500 font-['BoxedRound']">{section.title}</div>
                    {section.links.map((link, index) => (
                      <div key={index} className={`font-['QuanRounded'] whitespace-nowrap mt-${index === 0 ? '8' : '2'}`}>
                        {link}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex gap-5 justify-between pr-1.5 mt-3.5 w-full text-base text-white max-md:flex-wrap max-md:max-w-full">
          <div className="my-auto">©Optimus PRO Inc.</div>
          <div className="flex gap-5 justify-between leading-[150%]">
            <div>Alright Reserved</div>
            <div className="hidden">Privacy Policy</div>
            <div className="hidden">Terms of Service</div>
          </div>
        </div>
      </div>
    </div>
  );
}
