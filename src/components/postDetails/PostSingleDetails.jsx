import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '../../components/blog/data';
import { socialData } from '../data/social';
import React from 'react';
import { ArticleIcon } from '../svgicon';

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
      <div className="mx-auto max-w-[800px] pt-[120px] px-4 relative">
        <h3 className="text-white mt-[20px] uppercase line-clamp-3 mx-auto max-w-[900px] !leading-0 !text-2xl sm:!text-3xl body-text leading-7">{post.title}</h3>
        <div className="flex justify-between my-[48px] mb-[20px]">
          <div className="flex gap-3">
            <img src="https://i.imgur.com/1oiYEog.png" className="rounded-full w-[50px] h-[50px]" alt="single-post-img" />
            <div className="flex flex-col">
              <p className="text-[1.25rem] text-white body-text">Optimus PRO</p>
              <span className="!text-[1.1rem] relative -top-2 text-[#67666e] body-text">November 11, 2024</span>
            </div>
          </div>
          <div className="">
            <div className="p-[1px_15px] rounded-full bg-[#2d2c33] flex items-center gap-1 justify-center">
              <ArticleIcon />
              <span className="!text-[1rem] uppercase text-white body-text">Article</span>
            </div>
          </div>
        </div>
        <div className="rounded-[13px] border border-white/50 w-full overflow-hidden relative">
          <div className="w-full h-0 pb-[55%] relative">
            {' '}
            {/* Aspect Ratio 16:9 */}
            <img src={post.imageUrl} className="absolute top-0 left-0 w-full h-full object-cover" alt="single-post-img" />
          </div>
        </div>
        {/* <img src={post.imageUrl} className="rounded-[13px] border border-white/50 w-full h-[400px]" alt="single-post-img" /> */}
        <div className="mt-[30px]">
          <div className="w-full flex-col font-normal font-['Inter-Normal'] text-white/80">{post.content}</div>
          <div className="my-10 flex flex-wrap">
            {socialData.map((social, index) => (
              <React.Fragment key={index}>
                <Link to={social.link} target="_blank" className="text-white text-2xl">
                  <span className="gradient-text">{social.label}</span>
                </Link>
                {index < socialData.length - 1 && <span className="mx-2 text-2xl text-white">|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
