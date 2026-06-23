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
  const textColor = (Theme.colors as any).text || "#dcdcdc";
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
  },
  errorText: {
    marginTop: Theme.spacing.xs,
    textAlign: "center",
  },
});
