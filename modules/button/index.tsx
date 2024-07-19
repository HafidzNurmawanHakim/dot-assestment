import { MouseEventHandler, ReactElement } from "react";
import "./style.scss";

interface ComponentProps {
   children: string;
   startContent?: ReactElement;
   endContent?: ReactElement;
   variant?: "primary" | "danger" | "warning" | "secondary" | "transparent";
   onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Button({
   children,
   endContent,
   startContent,
   variant = "primary",
   onClick,
}: ComponentProps) {
   return (
      <button className={`button ${variant}`} onClick={onClick}>
         {startContent}
         {children}
         {endContent}
      </button>
   );
}

export default Button;
