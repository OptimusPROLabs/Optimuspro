import Hero from '../components/Company/Hero';
import OurCoreValues from '../components/Company/OurCoreValues';
import Moonshot from '../components/Company/Moonshot/Moonshot';
import Subscribe from '../components/Subscribe';
import TheNews from '../components/generalSections/TheNews';
import BuildFuture from '../components/Company/BuildFuture';
import OurStory from '../components/Company/OurStory';

export default function Company() {
  return (
    <div className="">
      <Hero />
      <OurStory />
      <OurCoreValues />
      <Moonshot />
      <BuildFuture />
      <TheNews />
      <div className="pt-[50px] sm:pt-[130px]">
        <Subscribe />
      </div>
    </div>
  );
}
