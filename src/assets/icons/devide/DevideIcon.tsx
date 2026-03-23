import type { FC, SVGProps } from "react";

const DevideIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={props.width || 19}
    height={props.height || 19}
    color="none"
    {...props}
  >
    <path d="M224 48a56 56 0 1 1 0 112 56 56 0 1 1 0-112zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM168 408a56 56 0 1 1 112 0 56 56 0 1 1 -112 0z" />
  </svg>
);

export default DevideIcon;
