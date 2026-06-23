import { Theme } from "@/Theme";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { H4, P2 } from "./Text";

export interface HeaderProps {
  title?: string;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  onBackPress?: () => void;
}

export const Header = ({
  title,
  leftComponent,
  rightComponent,
  onBackPress,
}: HeaderProps) => {
  return (
    <View style={styles.container}>
      {/* Coluna da Esquerda (Botão Voltar ou Componente Customizado) */}
      <View style={styles.left}>
        {leftComponent ? (
          leftComponent
        ) : onBackPress ? (
          <TouchableOpacity
            onPress={onBackPress}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <P2 color="textSecondary">&lt;</P2>
          </TouchableOpacity>
        ) : null}
      </View>

      {/* Coluna Central (Título) */}
      <View style={styles.center}>
        {title && (
          <H4 align="center" color="textPrimary">
            {title}
          </H4>
        )}
      </View>

      {/* Coluna da Direita (Avatar, Botão de Engrenagem, etc) */}
      <View style={styles.right}>{rightComponent}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Theme.spacing.md,
    paddingVertical: Theme.spacing.md,
    backgroundColor: Theme.colors.background,
    // Descomente abaixo se quiser uma linha dividindo o Header do resto da tela
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.border,
  },
  left: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  center: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  right: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
