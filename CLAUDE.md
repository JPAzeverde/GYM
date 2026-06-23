Quero que crie a pagina de regitro e login, apenas o visual delas

src/Components/Box.tsx
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

src/Components/Buttons.tsx
import { H4 } from "@/Components/Text";
import { Theme } from "@/Theme";
import {
ActivityIndicator,
StyleSheet,
TouchableOpacity,
TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
title: string;
variant?: "solid" | "outline" | "ghost";
isLoading?: boolean;
}

export function Button({
title,
variant = "solid",
isLoading,
disabled,
style,
...rest
}: ButtonProps) {
const isSolid = variant === "solid";
const isOutline = variant === "outline";
const isGhost = variant === "ghost";

// Usando um fallback de cores caso a cor exata não esteja no seu colors.ts
const primaryColor = (Theme.colors as any).primary || "#000";

return (
<TouchableOpacity
style={[
styles.container,
isSolid && { backgroundColor: primaryColor },
isOutline && {
backgroundColor: "transparent",
borderWidth: 1,
borderColor: primaryColor,
},
isGhost && { backgroundColor: "transparent" },
disabled && styles.disabled,
style,
]}
disabled={disabled || isLoading}
activeOpacity={0.7}
{...rest} >
{isLoading ? (
<ActivityIndicator color={isSolid ? "#000" : primaryColor} />
) : (
<H4
align="center"
// Se for preenchido (solid), o texto geralmente é branco/background.
// Se for outline ou ghost, o texto pega a cor primária.
style={{ color: isSolid ? "#000" : primaryColor }} >
{title}
</H4>
)}
</TouchableOpacity>
);
}

const styles = StyleSheet.create({
container: {
height: 56, // Tamanho confortável para toque
justifyContent: "center",
alignItems: "center",
borderRadius: Theme.radius.md,
paddingHorizontal: Theme.spacing.lg,
flexDirection: "row",
},
disabled: {
opacity: 0.6,
},
});

src/Components/Card.tsx
import { Box, BoxProps } from "@/Components/Box";
import { Theme } from "@/Theme";

type CardSize = "mini" | "normal" | "big";

export interface CardProps extends BoxProps {
size?: CardSize;
}

export function Card({ size = "normal", style, children, ...rest }: CardProps) {
// Mapeamos os espaçamentos, bordas e altura mínima com base no tamanho
const sizeConfig = {
mini: { p: "sm", radius: "sm", minHeight: undefined },
normal: { p: "lg", radius: "md", minHeight: 120 },
big: { p: "xl", radius: "lg", minHeight: 240 },
} as const;

const currentConfig = sizeConfig[size];

return (
<Box
bg="surface"
p={currentConfig.p}
radius={currentConfig.radius}
style={[Theme.shadows.soft, style, { padding: Theme.spacing.md }]}
{...rest} >
{children}
</Box>
);
}

src/Components/Input.tsx
import { P2, P3 } from "@/Components/Text";
import { Theme } from "@/Theme";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

interface InputProps extends TextInputProps {
label?: string;
error?: string;
width?: "full" | number; // "full" = 100% da tela, number = largura fixa em pixels
}

export function Input({
label,
error,
width = "full", // O padrão é sempre ocupar o máximo
style,
...rest
}: InputProps) {
const borderColor = (Theme.colors as any).border || "#E0E0E0";
const errorColor = (Theme.colors as any).error || "#FF3B30";
const textColor = (Theme.colors as any).text || "#000000";
const placeholderColor = (Theme.colors as any).textSecondary || "#999999";

// Define se o container usará porcentagem ou valor fixo
const containerStyle = {
width: width === "full" ? ("100%" as const) : width,
};

return (
<View style={[styles.container, containerStyle]}>
{label && <P2 style={styles.label}>{label}</P2>}

      <TextInput
        style={[
          styles.input,
          { borderColor: error ? errorColor : borderColor, color: textColor },
          style,
        ]}
        placeholderTextColor={placeholderColor}
        {...rest}
      />

      {error && (
        <P3 style={[styles.errorText, { color: errorColor }]}>{error}</P3>
      )}
    </View>

);
}

const styles = StyleSheet.create({
container: {
marginBottom: Theme.spacing.md,
margin: "auto",
},
label: {
marginBottom: Theme.spacing.xs,
textAlign: "center",
textTransform: "uppercase",
fontWeight: 600,
fontSize: Theme.typography.sizes.md,
},
input: {
height: 52,
borderWidth: 1,
borderRadius: Theme.radius.md,
paddingHorizontal: Theme.spacing.md,
fontFamily: Theme.typography.fonts.body,
fontSize: Theme.typography.sizes.sm,
backgroundColor: "transparent",
textAlign: "center",
textTransform: "uppercase",
},
errorText: {
marginTop: Theme.spacing.xs,
textAlign: "center",
},
});

src/Components/Text.tsx
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
lineHeight: Theme.typography.sizes.xxxl _ 1.1,
},
h2: {
fontFamily: Theme.typography.fonts.title,
fontSize: Theme.typography.sizes.xxl,
lineHeight: Theme.typography.sizes.xxl _ 1.2,
},
h3: {
fontFamily: Theme.typography.fonts.title,
fontSize: Theme.typography.sizes.xl,
lineHeight: Theme.typography.sizes.xl _ 1.2,
},
h4: {
fontFamily: Theme.typography.fonts.title,
fontSize: Theme.typography.sizes.lg,
lineHeight: Theme.typography.sizes.lg _ 1.2,
},
p1: {
fontFamily: Theme.typography.fonts.body,
fontSize: Theme.typography.sizes.lg,
lineHeight: Theme.typography.sizes.lg _ 1.5,
},
p2: {
fontFamily: Theme.typography.fonts.body,
fontSize: Theme.typography.sizes.md,
lineHeight: Theme.typography.sizes.md _ 1.5,
},
p3: {
fontFamily: Theme.typography.fonts.body,
fontSize: Theme.typography.sizes.sm,
lineHeight: Theme.typography.sizes.sm _ 1.5,
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
lineHeight: Theme.typography.sizes.md _ 1.5,
marginBottom: Theme.spacing.xs,
marginLeft: Theme.spacing.sm,
},
});

src/Screens/Amostra.tsx
src/Screens/Home.tsx
src/Screens/Perfil.tsx

src/Theme/colors.ts
export const colors = {
// Fundo e Superfícies
background: "#121212",
surface: "#1E1E1E",
surfaceHighlight: "#2C2C2C",

// Textos
textPrimary: "#FFFFFF",
textSecondary: "#A0A0A0",
textDisabled: "#666666",

// Brand (Monocromático, usando branco/cinza claro como primário)
primary: "#FFFFFF",
border: "#333333",

// Semânticas (Feedback)
error: "#CF6679", // Vermelho suave padrão para dark mode
success: "#03DAC6", // Verde/Ciano padrão para dark mode
};

src/Theme/index.ts
import { colors } from "./colors";
import { radius } from "./radius";
import { shadows } from "./shadows";
import { spacing } from "./spacing";
import { typography } from "./typography";

export const Theme = {
colors,
typography,
spacing,
radius,
shadows,
};

src/Theme/radius.ts
export const radius = {
none: 0,
sm: 8,
md: 8,
lg: 8,
pill: 9999, // Para botões totalmente arredondados
};

src/Theme/shadows.ts
export const shadows = {
soft: {
// iOS
shadowColor: "#000000",
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.5,
shadowRadius: 4,
// Android
elevation: 4,
},
medium: {
// iOS
shadowColor: "#000000",
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.7,
shadowRadius: 8,
// Android
elevation: 8,
},
};

src/Theme/spacing.ts
export const spacing = {
xs: 4,
sm: 8,
md: 16,
lg: 24,
xl: 32,
xxl: 48,
};

src/Theme/typography.ts
export const typography = {
fonts: {
title: "BebasNeue-Regular", // Certifique-se de carregar a fonte com este nome no App.tsx
body: "System", // Fonte padrão do sistema (San Francisco no iOS, Roboto no Android) para melhor legibilidade em textos longos
},
sizes: {
xs: 12,
sm: 14,
md: 16, // Base (p2)
lg: 20, // (p1)
xl: 24, // (h4)
xxl: 32, // (h3/h2)
xxxl: 48, // (h1)
},
weights: {
regular: "400" as const,
medium: "500" as const,
bold: "700" as const,
},
};
