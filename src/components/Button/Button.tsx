import clsx from "clsx";
import React, { ReactNode, forwardRef, useMemo } from "react";

export enum ButtonVariants {
  TRANSPARENT,
  FILLED,
  OUTLINE,
}

export enum ButtonColors {
  ORANGE = "orange",
  SECONDARY_BLUE = "secondary-blue",
  LIGHT_BLUE = "light-blue",
  WHITE = "white",
}

interface Props {
  children?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  variant?: ButtonVariants;
  color?: ButtonColors;
  onClick?: () => void;
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      prefix,
      suffix,
      variant = ButtonVariants.FILLED,
      color = ButtonColors.ORANGE,
      onClick,
      className,
    },
    ref
  ) => {
    const colorClasses = {
      [ButtonColors.ORANGE]: {
        filled: "bg-orange text-white hover:bg-dark-orange",
        outline: "border-orange text-orange",
        transparent: "text-orange",
      },
      [ButtonColors.SECONDARY_BLUE]: {
        filled: "bg-secondary-blue text-white hover:bg-dark-white",
        outline: "border-secondary-blue text-secondary-blue",
        transparent: "text-white",
      },
      [ButtonColors.LIGHT_BLUE]: {
        filled: "bg-light-blue text-white hover:bg-dark-light-blue",
        outline: "border-light-blue text-light-blue",
        transparent: "text-light-blue",
      },
      [ButtonColors.WHITE]: {
        filled: "bg-white text-light-blue hover:bg-dark-white",
        outline: "border-white text-white",
        transparent: "text-white",
      },
    };

    const variantClasses = useMemo(
      () => ({
        [ButtonVariants.FILLED]: colorClasses[color].filled,
        [ButtonVariants.OUTLINE]: `border-2 ${colorClasses[color].outline}`,
        [ButtonVariants.TRANSPARENT]: colorClasses[color].transparent,
      }),
      [color]
    );

    return (
      <button
        ref={ref}
        className={clsx(
          className,
          "py-[6px] px-[22px] rounded-md text-md font-medium flex gap-2 items-center justify-center outline-none transition-colors duration-100",
          variantClasses[variant]
        )}
        onClick={onClick}
      >
        {prefix}
        {children}
        {suffix}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
