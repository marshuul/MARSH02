import type { FC, SVGProps } from "react";
const LogoutIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M11.9474 21C7.00589 21 3 16.9706 3 12C3 7.02944 7.00589 3 11.9474 3" />
    <path d="M17 8C17 8 21 10.946 21 12C21 13.0541 17 16 17 16M20.5 12H9" />
  </svg>
);
export default LogoutIcon;
