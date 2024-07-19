import { Key, SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
   size?: number;
};

export const MailIcon: React.FC<IconSvgProps> = ({
   size = 24,
   width,
   height,
   strokeWidth = 1.5,
   fill = "none",
   ...props
}) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size || height}
      width={size || width}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
   >
      <path
         stroke="currentColor"
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeMiterlimit={10}
         strokeWidth={1.5}
         d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z"
      />
      <path
         stroke="currentColor"
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeMiterlimit={10}
         strokeWidth={1.5}
         d="m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9"
      />
   </svg>
);
export const LockIcon: React.FC<IconSvgProps> = ({
   size = 24,
   width,
   height,
   strokeWidth = 1.5,
   fill = "none",
   ...props
}) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size || height}
      width={size || width}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
   >
      <path
         stroke="currentColor"
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={1.5}
         d="M6 10V8c0-3.31 1-6 6-6s6 2.69 6 6v2m-6 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      />
      <path
         stroke="currentColor"
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={1.5}
         d="M17 22H7c-4 0-5-1-5-5v-2c0-4 1-5 5-5h10c4 0 5 1 5 5v2c0 4-1 5-5 5Z"
      />
   </svg>
);
export const LeftArrowIcon: React.FC<IconSvgProps> = ({
   size = 24,
   width,
   height,
   strokeWidth = 1.5,
   fill = "none",
   ...props
}) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size || height}
      width={size || width}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
   >
      <path
         stroke="#FF8A65"
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeMiterlimit={10}
         strokeWidth={1.5}
         d="M15 19.92 8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"
      />
   </svg>
);
export const RightArrowIcon: React.FC<IconSvgProps> = ({
   size = 24,
   width,
   height,
   strokeWidth = 1.5,
   fill = "none",
   ...props
}) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size || height}
      width={size || width}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
   >
      <path
         stroke="#FF8A65"
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeMiterlimit={10}
         strokeWidth={1.5}
         d="m8.91 19.92 6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
      />
   </svg>
);
export const CrownIcon: React.FC<IconSvgProps> = ({
   size = 24,
   width,
   height,
   strokeWidth = 1.5,
   fill = "none",
   ...props
}) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size || height}
      width={size || width}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
   >
      <path
         stroke="currentColor"
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={1.5}
         d="M2 15.29V5.71c0-1.33.77-1.65 1.71-.71L6.3 7.59c.39.39 1.03.39 1.41 0L11.29 4a.996.996 0 0 1 1.41 0l3.59 3.59c.39.39 1.03.39 1.41 0L20.29 5c.94-.94 1.71-.62 1.71.71v9.59c0 3-2 5-5 5H7c-2.76-.01-5-2.25-5-5.01Z"
      />
   </svg>
);
export const ClothsIcon: React.FC<IconSvgProps> = ({
   size = 24,
   width,
   height,
   strokeWidth = 1.5,
   fill = "none",
   ...props
}) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      viewBox="0 0 24 24"
      height={size || height}
      width={size || width}
      {...props}
   >
      <path d="M14.5 3.5s0 2-2.5 2-2.5-2-2.5-2h-2L4.207 6.793a1 1 0 0 0 0 1.414L6.5 10.5v10h11v-10l2.293-2.293a1 1 0 0 0 0-1.414L16.5 3.5h-2Z" />
   </svg>
);
export const MonitorIcon: React.FC<IconSvgProps> = ({
   size = 24,
   width,
   height,
   strokeWidth = 1.5,
   fill = "none",
   ...props
}) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size || height}
      width={size || width}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
   >
      <path
         stroke="currentColor"
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={1.5}
         d="M6.44 2h11.11C21.11 2 22 2.89 22 6.44v6.33c0 3.56-.89 4.44-4.44 4.44H6.44C2.89 17.22 2 16.33 2 12.78V6.44C2 2.89 2.89 2 6.44 2ZM12 17.22V22M2 13h20M7.5 22h9"
      />
   </svg>
);
