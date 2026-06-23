import { Theme } from "@/Theme";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import { P2 } from "./Text";

export interface AvatarProps {
  source?: ImageSourcePropType;
  size?: number;
  fallback?: string;
}

export const Avatar = ({ source, size = 48, fallback = "U" }: AvatarProps) => {
  const borderRadius = Theme.radius.pill;
  const initials = fallback.substring(0, 2).toUpperCase();

  return (
    <View
      style={[styles.container, { width: size, height: size, borderRadius }]}
    >
      {source ? (
        <Image
          source={source}
          style={[styles.image, { width: size, height: size, borderRadius }]}
        />
      ) : (
        <P2 color="textPrimary" style={styles.fallbackText}>
          {initials}
        </P2>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.surfaceHighlight,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    resizeMode: "cover",
  },
  fallbackText: {
    // Ajuste de alinhamento se a fonte BebasNeue precisar
    textAlign: "center",
  },
});
