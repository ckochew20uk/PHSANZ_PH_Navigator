import React from "react";

export type LogoVariant = "primary" | "white" | "mark";
export type LogoSize = "sm" | "md" | "lg";

const heights: Record<LogoSize, number> = { sm: 48, md: 64, lg: 80 };

const logoSrc: Record<LogoVariant, string> = {
  primary: `${import.meta.env.BASE_URL}logo-primary.svg`,
  white: `${import.meta.env.BASE_URL}logo-primary.svg`,
  mark: `${import.meta.env.BASE_URL}logo-mark.svg`,
};

interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
}

export function Logo({ variant = "primary", size = "md", className }: LogoProps) {
  const h = heights[size];

  return (
    <img
      src={logoSrc[variant]}
      alt="PH Navigator"
      className={className}
      style={{ height: h, width: "auto" }}
    />
  );
}
