import type { FC, SVGProps } from "react";

const UpDownIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={props.width || 19}
    height={props.height || 19}
    fill="none"
    {...props}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 4V20" />
    <path d="M17 19L17 4" />
    <path d="M10 6.99998C10 6.99998 7.79053 4.00001 6.99998 4C6.20942 3.99999 4 7 4 7" />
    <path d="M20 17C20 17 17.7905 20 17 20C16.2094 20 14 17 14 17" />
  </svg>
);

export default UpDownIcon;
