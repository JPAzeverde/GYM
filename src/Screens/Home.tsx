import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface HomeProps {
  onNavigate: () => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Home</Text>
      <TouchableOpacity style={styles.button} onPress={onNavigate}>
        <Text style={styles.buttonText}>Ir para Amostra</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212", // Um preview do nosso dark mode
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#333333",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
