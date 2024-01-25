import { ReactNode } from "react";
import { tv } from "tailwind-variants";
import { motion } from "framer-motion";
import { AnimationType } from "../../shared/type";

type Props = {
  icon?: ReactNode;
  label: string;
  btnType: "primary" | "secondary" | "tertiary" | "quartinary";
  className?: string;
  size?: "sm" | "md" | "xsm";
  initial?: AnimationType;
  animate?: AnimationType;
  transition?: AnimationType;
};

const button = tv({
  base: "flex justify-center items-center gap-8 font-Lato font-thin rounded-btn px-[80px] py-5 border-2",
  variants: {
    color: {
      primary: "bg-blue-primary-color-400 text-grey-primary-color-100",
      secondary:
        "border-blue-primary-color-400 border-blue-primary-color-400 text-blue-primary-color-400",
      tertiary: "bg-blue-primary-color-400 text-grey-primary-color-100",
      quartinary:
        "bg-grey-primary-color-100/60 border-blue-primary-color-400 text-blue-primary-color-400 ",
    },
    size: {
      xsm: "py-1 px-2 gap-2",
      sm: "py-xsm px-sm",
      md: "py-md",
    },
  },
});

export const Button = ({
  icon,
  label,
  btnType,
  className,
  size,
  initial,
  animate,
  transition,
}: Props) => {
  return (
    <motion.button
      initial={initial}
      animate={animate}
      transition={transition}
      className={`${button({ color: btnType, size: size, class: className })}`}
    >
      {icon ? <span>{icon}</span> : null}
      <span className={` text-xl font-bold`}>{label}</span>
    </motion.button>
  );
};
