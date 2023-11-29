import * as React from "react";

const Icon = ({ size = 67, color = "#1972d2", ...props }) => (
 <svg
  width={size}
  height={size}
  fill={color}
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
 >
  <path
   fillRule="evenodd"
   d="M6 3.6A2.4 2.4 0 0 0 3.6 6v12A2.4 2.4 0 0 0 6 20.4h12a2.4 2.4 0 0 0 2.4-2.4V6A2.4 2.4 0 0 0 18 3.6H6Zm10.8 4.8a1.2 1.2 0 1 0-2.4 0v7.2a1.2 1.2 0 1 0 2.4 0V8.4Zm-3.6 2.4a1.2 1.2 0 1 0-2.4 0v4.8a1.2 1.2 0 1 0 2.4 0v-4.8Zm-3.6 3.6a1.2 1.2 0 1 0-2.4 0v1.2a1.2 1.2 0 1 0 2.4 0v-1.2Z"
   clipRule="evenodd"
  />
 </svg>
);

export default Icon;