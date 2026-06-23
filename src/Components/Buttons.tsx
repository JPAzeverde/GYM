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
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={isSolid ? "#000" : primaryColor} />
      ) : (
        <H4
          align="center"
          // Se for preenchido (solid), o texto geralmente é branco/background.
          // Se for outline ou ghost, o texto pega a cor primária.
          style={{ color: isSolid ? "#000" : primaryColor }}
        >
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
