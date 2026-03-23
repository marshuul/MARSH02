import type { FC, SVGProps } from "react";

const ScrollIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={props.width || 19}
    height={props.height || 19}
    fill="none"
    {...props}
  >
    <path
      d="M14 12.0001C14 13.1046 13.1046 14.0001 12 14.0001C10.8954 14.0001 10 13.1046 10 12.0001C10 10.8955 10.8954 10.0001 12 10.0001C13.1046 10.0001 14 10.8955 14 12.0001Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M8 6.99997C8 6.99997 10.946 3.00001 12 3C13.0541 2.99999 16 7 16 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M16 17C16 17 13.054 21 12 21C10.9459 21 8 17 8 17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

export default ScrollIcon;
