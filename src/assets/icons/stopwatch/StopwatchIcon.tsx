import type { FC, SVGProps } from "react";

const StopwatchIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={props.width || 19}
    height={props.height || 19}
    fill="none"
    {...props}
  >
    <path
      d="M18 5.5L19 4.5M5 4.5L6 5.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <circle
      cx="12"
      cy="13"
      r="9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    ></circle>
    <path
      d="M12 9.5V13.5L14 15.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12 3.5V2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M10 2H14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

export default StopwatchIcon;
