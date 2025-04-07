import BuildTogether from '../components/Community/buildTogether/BuildTogether';
import CommunityCulture from '../components/Community/CommunityCulture';
import CommunityInsight from '../components/Community/communityInsight/CommunityInsight';
import CommunityProgram from '../components/Community/CommunityProgram';
import Hero from '../components/Community/hero/Hero';
import JoinCommunity from '../components/Community/JoinCommunity';
import LetConnect from '../components/generalSections/LetConnect';
import ProFraction from '../components/Community/ProFraction';
import Subscribe from '../components/Subscribe';
import InTheNews from '../components/generalSections/TheNews';
import { Element, scroller } from 'react-scroll';

export default function Community() {
  const scrollToJoinCommunity = () => {
    scroller.scrollTo('joinCommunitySection', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <div className="">
      <Hero />
      <ProFraction scrollToJoinCommunity={scrollToJoinCommunity} />
      <BuildTogether />
      <CommunityProgram />
      <Element name="joinCommunitySection">
        <JoinCommunity />
      </Element>
      <CommunityCulture />
      <CommunityInsight />
      <InTheNews />
      <LetConnect />
      <Subscribe />
    </div>
  );
}
