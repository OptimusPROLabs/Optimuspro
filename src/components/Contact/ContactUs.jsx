
export default function ContactUs() {
  const loopOver = [
    {
      icons: '/emailicon.png',
      header: 'General Inquiries',
      sub: 'For general questions, feedback or comments, feel free to reach us at hello@optimuspro.io or fill out our contact form.',
      mail: "hello@optimuspro.io"
    },
    {
      icons: '/bagicon.png',
      header: 'Business Inquiries',
      sub: 'To discuss potential business opportunities, please reach out to our business development team at info@optimuspro.io',
      mail: 'info@optimuspro.io'
    },
    {
      icons: '/handshakeicon.png',
      header: 'Partnerships',
      sub: "If you're interested in exploring opportunities for partnership and collaboration, please contact our partnerships team at partners@optimuspro.io to schedule a call.",
      mail: 'partners@optimuspro.io'
    },
    {
      icons: '/chaticon.png',
      header: 'Customer Support',
      sub: 'Need assistance? Our support team is here to help. Please visit our support center at support@optimuspro.io',
      mail: 'support@optimuspro.io'
    },
    {
      icons: '/newsicon.png',
      header: 'Invest',
      sub: 'Interested in investing in our ambitious vision for Web3? Connect with us at invest@optimuspro.io',
      mail: 'invest@optimuspro.io'
    },
    {
      icons: '/newsicon.png',
      header: 'Media & Press',
      sub: 'For media inquiries, press releases, or interview requests, please contact our PR team at press@optimuspro.io',
      mail: 'press@optimuspro.io'
    }
  ];

  // Helper function to render email addresses as clickable Links
  const renderEmailText = text => {
    // Regular expression to match email addresses
    const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

    // Split the text by email and create an array of parts
    const parts = text.split(emailRegex);

    // Map over parts, rendering emails as <Link> components
    return parts.map((part, index) =>
      emailRegex.test(part) ? (
        <a key={index} href={`mailto:${part}`} className="text-blue-500 underline">
          {part}
        </a>
      ) : (
        part
      )
    );
  };

  return (
    <div className="flex justify-center items-center flex-col pt-36">
      {/** heading */}
      <div className="w-[100%] px-4 flex flex-col gap-[9px] items-center justify-center">
        <div className="mt-6 boxed_round_fonts text-center max-md:max-w-full text-[#FFF]">
          {' '}
          Contact <span className="gradient-text">Us</span>
        </div>
        <div className="sub-heading text-center text-white mx-auto max-w-[700px]">We’d love to hear from you! Whether you have questions, feedback, or need support, our team is here to help</div>
      </div>
      {/** content */}
      <div className="flex flex-col gap-5 w-[100%] px-4 md:px-7 mt-20">
        <div className="text-[#FFF] body-text text-center mb-6 font-bold">Get in Touch with Our Team</div>
        {/** picture and */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-7">
          <div className="w-[100%] md:w-[50%]">
            <img src="/contactus.png" alt="" className="w-[100%] h-auto" />
          </div>
          <div className="w-[100%] md:w-[50%] h-[100%] flex flex-col gap-6">
            {loopOver.map((data, index) => (
              <div key={index} className="bg-[#212121] bg-opacity-[50%] rounded-lg p-4 flex items-start gap-3 w-full">
                <a href={`mailto:${data.mail}`}>
                  <img src={data.icons} alt="" className="w-10 h-10" />
                </a>
                <div className="flex-1">
                  <div className="text-white body-text font-semibold">{data.header}:</div>
                  <div className="text-white body-text !text-base">{renderEmailText(data.sub)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
