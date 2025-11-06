import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a4 4 0 1 0-8 0c0 1.08.49 2.06.94 2.7" />
      <path d="M12 2v10.5" />
      <path d="M8 12.5c0 1.38.74 2.5 2 3s2.24 1.5 4 1.5" />
    </svg>
  );
}
