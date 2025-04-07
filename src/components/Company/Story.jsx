import React from "react";

export default function Story() {
  return (
    <div className="flex justify-center items-start flex-col">
      <div className="w-[100%] flex flex-col items-center justify-center">
        <div className="mt-6 text-5xl font-bold text-center leading-[70.08px] max-md:max-w-full max-md:text-4xl font-boxed text-[#0084FE]">
          {" "}
          Our Story
        </div>
        <div className="text-sm text-center text-white w-[100%] md:w-[50%]">
          A group of blockchain visionaries, bound by shared passion and
          unwavering vision, coming from humble beginnings to build a dynamic
          community that's shaping the future of the internet.
        </div>
      </div>
      {/** For image and explanation */}
      <div className="w-[100%] flex flex-col md:flex-row mt-14 px-6">
        <div className="w-[100%] md:w-[50%]">
          <img src="/optimusstory.png" alt="" />
        </div>
        <div className="flex flex-col gap-10 w-[100%] md:w-[50%] mt-7 md:mt-0">
          <div className="text-white">
            Founded in 2020, our journey began with an unwavering passion for
            Web3 technologies and a relentless drive to solve real-world
            problems we experienced firsthand - scams, pumps & dumps, hacks, and
            more. These problems still pervade the Web3 ecosystem today and have
            cost users hundreds of billions of dollars. Since our inception,
            we've carefully assembled a team of dedicated and talented
            individuals bound by a shared purpose: to harness the power of Web3
            to create a better future for all.
          </div>
          <div className="text-white">
            We've always imagined a Web3 community where every member,
            regardless of their background, expertise and experience, has a
            voice, where innovation is borderless, and where trust and security
            are the foundation. Our vision is to build an inclusive,
            community-driven and secure ecosystem where everyone can
            collaborate, build, and thrive together, actualizing a decentralized
            future that's fair, open, and empowering for all.
          </div>
          <div className="text-white">
            Optimus PRO is a decentralized collective, fueled by a shared
            passion for blockchain and Web3 technologies. Our mission is to
            empower the next generation of Web3 innovators and builders,
            fostering innovation and collaboration within the Web3 ecosystem,
            and driving the development of new solutions and applications that
            shape the future of the internet.
          </div>
        </div>
      </div>
    </div>
  );
}
