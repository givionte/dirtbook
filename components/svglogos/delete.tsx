import { SVGProps } from "react";

function DeleteSVG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8 11a1 1 0 100 2h8a1 1 0 100-2H8z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 5a4 4 0 014-4h14a4 4 0 014 4v14a4 4 0 01-4 4H5a4 4 0 01-4-4V5zm4-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"
        fill="currentColor"
      />
    </svg>
  );
}

export default DeleteSVG;
