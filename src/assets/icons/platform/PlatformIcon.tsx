import type { FC, SVGProps } from "react";

const PlatformIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={props.width || 19}
    height={props.height || 19}
    fill="none"
    {...props}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <ellipse
      cx="12"
      cy="12"
      rx="4"
      ry="10"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M2 12H22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PlatformIcon;
