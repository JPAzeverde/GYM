import { Theme } from "@/Theme";
import React from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
  TextStyle,
} from "react-native";

// Removemos o 'ul' da tipagem
type TextVariant = "h1" | "h2" | "h3" | "h4" | "p1" | "p2" | "p3" | "a" | "li";

export interface TextProps extends RNTextProps {
  color?: keyof typeof Theme.colors;
  align?: TextStyle["textAlign"];
  children: React.ReactNode;
}

const BaseText = ({
  variant,
  color = "textPrimary",
  align = "left",
  style,
  children,
  ...rest
}: TextProps & { variant: TextVariant }) => {
  const customStyles: TextStyle[] = [
    styles[variant],
    { color: Theme.colors[color], textAlign: align },
    style as TextStyle,
  ];

  const content = variant === "li" ? `\u2022  ${children}` : children;

  return (
    <RNText style={customStyles} {...rest}>
      {content}
    </RNText>
  );
};

export const H1 = (props: TextProps) => <BaseText variant="h1" {...props} />;
export const H2 = (props: TextProps) => <BaseText variant="h2" {...props} />;
export const H3 = (props: TextProps) => <BaseText variant="h3" {...props} />;
export const H4 = (props: TextProps) => <BaseText variant="h4" {...props} />;
export const P1 = (props: TextProps) => <BaseText variant="p1" {...props} />;
export const P2 = (props: TextProps) => <BaseText variant="p2" {...props} />;
export const P3 = (props: TextProps) => <BaseText variant="p3" {...props} />;
export const A = (props: TextProps) => <BaseText variant="a" {...props} />;
export const LI = (props: TextProps) => <BaseText variant="li" {...props} />;

const styles = StyleSheet.create({
  h1: {
    fontFamily: Theme.typography.fonts.title,
    fontSize: Theme.typography.sizes.xxxl,
    lineHeight: Theme.typography.sizes.xxxl * 1.1,
  },
  h2: {
    fontFamily: Theme.typography.fonts.title,
    fontSize: Theme.typography.sizes.xxl,
    lineHeight: Theme.typography.sizes.xxl * 1.2,
  },
  h3: {
    fontFamily: Theme.typography.fonts.title,
    fontSize: Theme.typography.sizes.xl,
    lineHeight: Theme.typography.sizes.xl * 1.2,
  },
  h4: {
    fontFamily: Theme.typography.fonts.title,
    fontSize: Theme.typography.sizes.lg,
    lineHeight: Theme.typography.sizes.lg * 1.2,
  },
  p1: {
    fontFamily: Theme.typography.fonts.body,
    fontSize: Theme.typography.sizes.lg,
    lineHeight: Theme.typography.sizes.lg * 1.5,
  },
  p2: {
    fontFamily: Theme.typography.fonts.body,
    fontSize: Theme.typography.sizes.md,
    lineHeight: Theme.typography.sizes.md * 1.5,
  },
  p3: {
    fontFamily: Theme.typography.fonts.body,
    fontSize: Theme.typography.sizes.sm,
    lineHeight: Theme.typography.sizes.sm * 1.5,
  },
  a: {
    fontFamily: Theme.typography.fonts.body,
    fontSize: Theme.typography.sizes.md,
    textDecorationLine: "underline",
    color: Theme.colors.primary,
  },
  li: {
    fontFamily: Theme.typography.fonts.body,
    fontSize: Theme.typography.sizes.md,
    lineHeight: Theme.typography.sizes.md * 1.5,
    marginBottom: Theme.spacing.xs,
    marginLeft: Theme.spacing.sm,
  },
});
