import { SVGProps } from "react";

function DetailsSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={36}
      height={36}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 12a2 2 0 11-4 0 2 2 0 014 0zM14 12a2 2 0 11-4 0 2 2 0 014 0zM18 14a2 2 0 100-4 2 2 0 000 4z"
        fill=""
      />
    </svg>
  );
}

export default DetailsSVG;
