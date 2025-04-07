import { Link } from 'react-router-dom';
import { ArticleIcon } from '../svgicon';
import { blogPosts } from './data';
import { generateSlug } from '../generateSlug';

export default function Trending() {
  const trendingPost = blogPosts[4];

  return (
    <div className="px-4">
      <div className="mb-[44px] flex items-center justify-center">
        <h3 className="gradient-text boxed_round_fonts">Trending</h3>
      </div>
      <div className="w-[279px] sm:w-[379px] h-[263px] sm:h-[463px] absolute -left-[60%] sm:left-[40%] bg-[#006dd9]/25 rounded-[100px] blur-[100px]" />
      <div className="w-[279px] sm:w-[379px] h-[263px] sm:h-[463px] absolute -left-[60%] sm:-left-[10%] bg-[#006dd9]/25 rounded-[100px] blur-[100px]" />
      <div className="w-[279px] sm:w-[379px] h-[263px] sm:h-[463px] absolute -right-[50%] sm:-right-[10%] top-[15%] sm:top-[40%] bg-[#006dd9]/25 rounded-[100px] blur-[100px]" />
      <div className="w-[279px] sm:w-[379px] h-[263px] sm:h-[463px] absolute -left-[50%] sm:-left-[10%] top-[15%] sm:top-[60%] bg-[#006dd9]/25 rounded-[100px] blur-[100px]" />
      <div className="w-[279px] sm:w-[379px] h-[263px] sm:h-[463px] absolute -right-[50%] sm:-right-[10%] top-[15%] sm:top-[60%] bg-[#006dd9]/25 rounded-[100px] blur-[100px]" />
      <div className="mx-auto relative z-10 p-[16px] sm:p-[30px] max-w-[1100px] min-h-[418.10px] flex flex-col md:flex-row gap-[45px] bg-white/5 rounded-[13.86px] border border-white/10">
        <div className="w-full">
          <img src={trendingPost.imageUrl} className="w-full h-auto sm:h-full relative rounded-2xl" alt={trendingPost.title} />
        </div>
        <div className="w-full">
          <span className="max-w-[72.83px] h-[26.56px] pl-[9.24px] pr-[9.01px] py-[4.62px] bg-[#3c3c3c] rounded-[13.86px] justify-center items-center gap-[4.62px] flex">
            <ArticleIcon />
            <span className="max-w-[36.10px] h-[17.32px] text-white text-xs font-normal font-['Inter-Normal'] leading-[17.32px]">Article</span>
          </span>
          <div className="w-full mt-[9px]">
            <span className="text-white line-clamp-3 text-[25px] sm:text-[30px] font-medium font-['Inter-Medium']">{trendingPost.title}</span>
          </div>
          <div className="w-full my-[18px] justify-start items-center flex">
            <span className="max-w-[494px] line-clamp-3 text-white/80 text-lg font-normal font-['Inter-Normal']">{trendingPost.content}</span>
          </div>
          <Link to={`/blog/${generateSlug(trendingPost.title)}`} className="gradient-text relative text-lg font-normal font-['Inter-Normal'] underline leading-7">
            Go to article →
            <div className="gradient-background h-[1px] absolute w-full" />
          </Link>
        </div>
      </div>
    </div>
  );
}
