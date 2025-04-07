export default function Accordion({ title, children, isOpen, onToggle }) {
  return (
    <div>
      <button
        className={`flex items-center justify-between w-full pl-4 pr-[24px] py-[12px] sm:py-[24px] text-left text-[24px] font-medium text-white focus:outline-none border-b border-[#444444] first:border-t-0`}
        onClick={onToggle}
      >
        <span className="body-text">{title}</span>
        <svg className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} width={35} height={35} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            opacity={0.1}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 17.5C0 7.83502 7.83502 0 17.5 0C27.165 0 35 7.83502 35 17.5C35 27.165 27.165 35 17.5 35C7.83502 35 0 27.165 0 17.5Z"
            fill="white"
          />
          <mask id="mask0_223_607" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x={10} y={10} width={16} height={16}>
            <rect x={26} y={10} width={16} height={16} transform="rotate(90 26 10)" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_223_607)">
            <path d="M11.3333 15.3503L12.5166 14.167L18 19.6503L23.4833 14.167L24.6666 15.3503L18 22.017L11.3333 15.3503Z" fill="white" />
          </g>
        </svg>
      </button>
      {isOpen && <div className="px-4 py-2 pb-5 border-b border-[#444444] body-text text-white">{children}</div>}
    </div>
  );
}
