"use client";

import React from "react";
import { cn } from "@/lib/cn";
import styles from "./UniversalButton.module.css";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "ghost"
  | "link"
  | "outlined"
  | "filled"
  | "subtle"
  | "destructive";

export type ButtonSize = "tiny" | "small" | "medium" | "large" | "huge";

export type ButtonColor =
  | "default"
  | "clay"
  | "sage"
  | "ink"
  | "cream"
  | "danger";

export type AnimationPreset = "none" | "scale" | "fade" | "lift";

export interface UniversalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  fullWidth?: boolean;
  loading?: boolean;
  rounded?: boolean;
  elevation?: 0 | 1 | 2 | 3;
  animationPreset?: AnimationPreset;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}

const variantClass: Record<ButtonVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  tertiary: styles.tertiary,
  ghost: styles.ghost,
  link: styles.link,
  outlined: styles.outlined,
  filled: styles.filled,
  subtle: styles.subtle,
  destructive: styles.destructive,
};

const sizeClass: Record<ButtonSize, string> = {
  tiny: styles.tiny,
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
  huge: styles.huge,
};

export function UniversalButton(props: UniversalButtonProps) {
  const {
    variant = "primary",
    size = "medium",
    color = "default",
    fullWidth = false,
    loading = false,
    rounded = false,
    elevation = 0,
    animationPreset = "none",
    leftIcon = null,
    rightIcon = null,
    children,
    className,
    disabled,
    ...rest
  } = props;

  const computedStyle: React.CSSProperties = {};
  if (color === "clay") computedStyle.backgroundColor = "#B5896A";
  if (color === "sage") computedStyle.backgroundColor = "#8B9A7B";
  if (color === "ink") computedStyle.backgroundColor = "#1C1815";
  if (color === "cream") {
    computedStyle.backgroundColor = "#FAF6EE";
    computedStyle.color = "#1C1815";
  }
  if (color === "danger") computedStyle.backgroundColor = "#a23a2a";
  if (elevation === 1) computedStyle.boxShadow = "0 1px 2px rgba(0,0,0,0.06)";
  if (elevation === 2) computedStyle.boxShadow = "0 2px 6px rgba(0,0,0,0.08)";
  if (elevation === 3) computedStyle.boxShadow = "0 6px 16px rgba(0,0,0,0.12)";
  if (rounded) computedStyle.borderRadius = "999px";

  const classes = cn(
    styles.base,
    variantClass[variant],
    sizeClass[size],
    {
      [styles.fullWidth]: fullWidth,
      [styles.loading]: loading,
      [styles.animScale]: animationPreset === "scale",
      [styles.animFade]: animationPreset === "fade",
      [styles.animLift]: animationPreset === "lift",
    },
    className
  );

  return (
    <button
      {...rest}
      className={classes}
      style={computedStyle}
      disabled={disabled || loading}
    >
      {loading ? (
        <span className={styles.spinner} aria-hidden="true" />
      ) : (
        <>
          {leftIcon ? <span className={styles.icon}>{leftIcon}</span> : null}
          <span>{children}</span>
          {rightIcon ? <span className={styles.icon}>{rightIcon}</span> : null}
        </>
      )}
    </button>
  );
}

export default UniversalButton;
