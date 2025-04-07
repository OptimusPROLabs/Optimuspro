import { Link } from 'react-router-dom';
import { blogPosts } from '../blog/data';
import { generateSlug } from '../generateSlug';

export default function TheNews() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div className="pt-[50px] sm:pt-[100px]">
      <div className="relative w-[100vw] flex flex-col items-center px-0 sm:px-10">
        <img src="/blog.png" alt="" className="absolute sm:top-[-90px] w-[100%] h-full md:h-[950px] z-10" />
        <div className="text-white font-['AdventPro-Bold'] text-5xl z-20 mt-[60px]">Blog</div>

        <div className="w-full px-4 sm:px-20 mt-10 md:mt-20 relative z-20">
          <div className="flex flex-col md:flex-row gap-5">
            {featuredPosts.map(post => (
              <div key={post.id} className="w-full md:w-[389px] border bg-sky-500/10 rounded-[16px] p-4 mb-[24px]">
                <div className="w-full rounded-[16px] h-[234px] overflow-hidden mb-[24px]">
                  <img src={post.imageUrl} className="w-full h-full" alt={post.title} />
                </div>
                <div className="flex items-center font-['AdventPro-Regular'] justify-between text-base text-white">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                </div>
                <p className="text-left text-[17px] mb-2 line-clamp-3 md:text-2xl text-white mt-4 font-['AdventPro-Regular']">{post.title}</p>
                <Link to={`/blog/${generateSlug(post.title)}`} className="text-white hover:underline underline-offset-8 relative text-base font-normal font-['Inter-Normal'] leading-7">
                  Go to article →
                  {/* <div className="bg-white h-[1px] absolute w-full" /> */}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
