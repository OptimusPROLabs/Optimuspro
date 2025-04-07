import { useParams } from 'react-router-dom';
import { blogPosts } from '../../components/blog/data';

export default function PostSingleDetails() {
  const { slug } = useParams();

  const generateSlug = title => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '') // Remove special characters
      .replace(/\s+/g, '-'); // Replace spaces with hyphens
  };

  const post = blogPosts.find(post => generateSlug(post.title) === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="">
      <div className="mx-auto max-w-[800px] pt-[120px] px-4">
        <h3 className="text-white mt-[20px] uppercase line-clamp-3 mx-auto max-w-[900px] !leading-0 !text-2xl sm:!text-3xl body-text leading-7">{post.title}</h3>
        <div className="flex justify-between my-[48px] mb-[20px]">
          <div className="flex gap-3">
            <img src={post.imageUrl} className="rounded-full w-[50px] h-[50px] border border-white/50" alt="single-post-img" />
            <div className="flex flex-col">
              <p className="text-[1.25rem] text-white body-text">Optimus PRO</p>
              <span className="!text-[1.1rem] relative -top-2 text-[#67666e] body-text">November 11, 2024</span>
            </div>
          </div>
          <div className="">
            <div className="p-[1px_15px] rounded-full bg-[#2d2c33] flex items-center justify-center">
              <span className='!text-[1rem] uppercase text-white body-text'>Article</span>
            </div>
          </div>
        </div>
        <img src={post.imageUrl} className="rounded-[13px] border border-white/50 w-full" alt="single-post-img" />
        <div className="mt-[30px]">
          <div className="flex flex-col gap-[28px]">
            <span className="text-[23.21px] font-normal font-['Inter-Normal'] text-white/80">{post.date}</span>
            <span className="max-w-[98px] h-[26.56px] pl-[9.24px] pr-[9.01px] py-[4.62px] bg-[#ffffff] rounded-[13.86px] justify-center items-center gap-[4.62px] flex">
              <span className="text-[#2072EF] text-lg font-normal font-['Inter-Normal'] leading-[17.32px]">Article</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-20 md:gap-0 mt-[40px] mb-[20px]">
          <div className="w-full flex-col font-normal font-['Inter-Normal'] text-white/80">{post.content}</div>
          <div className="sm:w-[50%] md:pl-[50px]">
            <div className="flex items-center gap-[27px] mb-[29px]">
              <img src="/play-store.png" className="w-[114px] border rounded-lg border-white/20" alt="" />
              <img src="/app-store.png" className="w-[114px] border rounded-lg border-white/20" alt="" />
            </div>
            <div className="w-full min-h-[406px] p-3 py-5 bg-[#2072EF] rounded-[17.41px]">
              <div className="text-center text-white text-[27.86px] font-medium font-['Inter-Medium'] leading-7">
                Optimus PRO
                <br />
                Weekly
              </div>
              <div className="mt-[20px] text-white text-2xl font-normal font-['Inter-Normal'] leading-[30.18px]">
                Subscribe for latest
                <br />
                crypto news & stay
                <br />
                updated!
              </div>
              <form className="flex flex-col items-center justify-center gap-[24px] mt-[30px]">
                <input type="email" placeholder="Enter email address" className="bg-[#0659D7] text-white rounded-[46.43px] outline-none w-full min-h-[46.43px] px-[13.35px] py-[12.19px]" />
                <button className="w-[129px] p-3 min-h-10 relative bg-white rounded-[46.43px] justify-center items-center inline-flex">
                  <span className="text-center text-[#2072ef] text-lg font-normal font-['Inter-Normal'] leading-[17.41px]">Subscribe</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
