import { ReactNode } from "react";
import { tv } from "tailwind-variants";

type Props = {
  icon?: ReactNode;
  label: string;
  btnType: "primary" | "secondary" | "tertiary" | "quartinary";
  className?: string;
  size?: "sm" | "md" | "xsm";
};

const button = tv({
  base: "flex justify-center items-center gap-8 rounded-btn px-[80px] py-5 border-2",
  variants: {
    color: {
      primary: "bg-blue-primary-color-400 text-grey-primary-color-100",
      secondary:
        "border-blue-primary-color-400 border-blue-primary-color-400 text-blue-primary-color-400",
      tertiary: "bg-blue-primary-color-400 text-grey-primary-color-100",
      quartinary:
        "bg-blue-primary-color-200/40 border-blue-primary-color-400 text-blue-primary-color-400",
    },
    size: {
      xsm: "py-1 px-2 gap-2",
      sm: "py-xsm px-sm",
      md: "py-md",
    },
  },
});

export const Button = ({ icon, label, btnType, className, size }: Props) => {
  return (
    <button
      className={`${button({ color: btnType, size: size, class: className })}`}
    >
      {icon ? <span>{icon}</span> : null}
      <span className={` text-xl font-bold`}>{label}</span>
    </button>
  );
};
