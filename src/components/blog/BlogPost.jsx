import { Link } from 'react-router-dom';
import { ArticleIcon } from '../svgicon';
import { blogPosts } from './data';
import { generateSlug } from '../generateSlug';

export default function BlogPost() {
  return (
    <div className="mx-auto relative max-w-[1100px] px-4">
      <span className="max-w-[61px] h-[26.56px] pl-[9.24px] pr-[9.01px] py-[4.62px] bg-[#3c3c3c] rounded-[13.86px] justify-center items-center gap-[4.62px] flex">
        <span className="max-w-[36.10px] h-[17.32px] text-white text-xs font-normal font-['Inter-Normal'] leading-[17.32px]">Blog</span>
      </span>
      <div className="sm:hidden w-[279px] sm:w-[379px] h-[263px] sm:h-[463px] absolute -left-[50%] sm:-left-[10%] -top-[0%] sm:top-[60%] bg-[#006dd9]/25 rounded-[100px] blur-[100px]" />
      <div className="sm:hidden w-[279px] sm:w-[379px] h-[263px] sm:h-[463px] absolute -left-[50%] sm:-left-[10%] -bottom-[0%] sm:top-[60%] bg-[#006dd9]/25 rounded-[100px] blur-[100px]" />
      <div className="sm:hidden w-[279px] sm:w-[379px] h-[263px] sm:h-[463px] absolute -right-[50%] sm:-right-[10%] -bottom-[0%] sm:top-[60%] bg-[#006dd9]/25 rounded-[100px] blur-[100px]" />
      <div className="sm:hidden w-[279px] sm:w-[379px] h-[263px] sm:h-[463px] absolute -right-[50%] sm:-right-[10%] top-[15%] sm:top-[60%] bg-[#006dd9]/25 rounded-[100px] blur-[100px]" />
      <div className="sm:hidden w-[279px] sm:w-[379px] h-[263px] sm:h-[463px] absolute right-[40%] sm:-right-[10%] top-[35%] sm:top-[60%] bg-[#006dd9]/25 rounded-[100px] blur-[100px]" />
      <div className="sm:hidden w-[279px] sm:w-[379px] h-[263px] sm:h-[463px] absolute right-[40%] sm:-right-[10%] top-[50%] sm:top-[60%] bg-[#006dd9]/25 rounded-[100px] blur-[100px]" />
      <div className="w-full relative z-10 mt-[45px] grid sm:grid-cols-2 md:grid-cols-3 gap-[20px]">
        {blogPosts.map(post => (
          <div key={post.id} className="w-full overflow-hidden border border-t-0 border-white/10 rounded-[13px]">
            <div className="w-full">
              <img src={post.imageUrl} className="w-full h-[219.6px]" alt={post.title} />
            </div>
            <div className="p-5">
              <span className="max-w-[72.83px] h-[26.56px] pl-[9.24px] pr-[9.01px] py-[4.62px] bg-[#3c3c3c] rounded-[13.86px] justify-center items-center gap-[4.62px] flex">
                <ArticleIcon />
                <span className="max-w-[36.10px] h-[17.32px] text-white text-xs font-normal font-['Inter-Normal'] leading-[17.32px]">Article</span>
              </span>
              <p className="text-white my-[9px] line-clamp-3 text-lg font-medium font-['Inter-Medium'] leading-7">{post.title}</p>
              <Link to={`/blog/${generateSlug(post.title)}`} className="gradient-text relative text-base font-normal font-['Inter-Normal'] underline leading-7">
                Go to article →
                <div className="gradient-background h-[1px] absolute w-full" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
