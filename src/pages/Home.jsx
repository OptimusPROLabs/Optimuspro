import Hero from '../components/Home/Hero';
import Community from '../components/Home/Community';
import Feature from '../components/Home/future/Feature';
import Numberspeak from '../components/Home/Numberspeak';
import Testimony from '../components/Home/Testimony';
import Subscribe from '../components/Subscribe';
import LetConnect from '../components/generalSections/LetConnect';
import TheNews from '../components/generalSections/TheNews';

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Community />
      <Feature />
      <Numberspeak />
      <Testimony />
      <TheNews />
      <LetConnect />
      <Subscribe />
    </div>
  );
}
