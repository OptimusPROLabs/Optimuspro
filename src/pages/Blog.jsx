import Banner from '../components/blog/Banner';
import BlogPost from '../components/blog/BlogPost';
import Trending from '../components/blog/Trending';
import LetConnect from "../components/generalSections/LetConnect";
import Subscribe from '../components/Subscribe';

export default function Blog() {
  return (
    <div className='mb-[70px]'>
      <Banner />
      <Trending />
      <div className="mt-[100px]">
        <BlogPost />
      </div>
      <LetConnect />
      <Subscribe />
    </div>
  );
}
