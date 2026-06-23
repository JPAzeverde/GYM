import { Theme } from "@/Theme";
import { View, ViewProps, ViewStyle } from "react-native";

// Estendemos o ViewProps nativo e adicionamos atalhos tipados para o nosso Theme
export interface BoxProps extends ViewProps {
  bg?: keyof typeof Theme.colors;
  p?: keyof typeof Theme.spacing; // Padding total
  px?: keyof typeof Theme.spacing; // Padding Horizontal
  py?: keyof typeof Theme.spacing; // Padding Vertical
  m?: keyof typeof Theme.spacing; // Margin total
  mb?: keyof typeof Theme.spacing; // Margin Bottom
  radius?: keyof typeof Theme.radius;
  row?: boolean; // Atalho para flex-direction: row
  align?: ViewStyle["alignItems"];
  justify?: ViewStyle["justifyContent"];
  flex?: number;
}

export function Box({
  bg,
  p,
  px,
  py,
  m,
  mb,
  radius,
  row,
  align,
  justify,
  flex,
  style,
  children,
  ...rest
}: BoxProps) {
  // Monta o estilo dinamicamente baseado nas props passadas
  const dynamicStyle: ViewStyle = {
    ...(bg && { backgroundColor: Theme.colors[bg] }),
    ...(p && { padding: Theme.spacing[p] }),
    ...(px && { paddingHorizontal: Theme.spacing[px] }),
    ...(py && { paddingVertical: Theme.spacing[py] }),
    ...(m && { margin: Theme.spacing[m] }),
    ...(mb && { marginBottom: Theme.spacing[mb] }),
    ...(radius && { borderRadius: Theme.radius[radius] }),
    ...(row && { flexDirection: "row" }),
    ...(align && { alignItems: align }),
    ...(justify && { justifyContent: justify }),
    ...(flex !== undefined && { flex }),
  };

  return (
    <View style={[dynamicStyle, style]} {...rest}>
      {children}
    </View>
  );
}
