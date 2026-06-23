import { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

// Importações para a Fonte
import { BebasNeue_400Regular, useFonts } from "@expo-google-fonts/bebas-neue";
import * as SplashScreen from "expo-splash-screen";

import { Amostra } from "@/Screens/Amostra";
import { Home } from "@/Screens/Home";

// Mantém a tela de carregamento (splash) ativa enquanto a fonte baixa
SplashScreen.preventAutoHideAsync();

type Screen = "Home" | "Amostra";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("Home");

  // Carrega a fonte e dá a ela o mesmo nome que definimos no nosso typography.ts
  const [fontsLoaded, fontError] = useFonts({
    "BebasNeue-Regular": BebasNeue_400Regular,
  });

  // Quando a fonte terminar de carregar (ou der erro), ocultamos a splash screen
  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Não renderiza nada enquanto a fonte não estiver pronta
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />

      {currentScreen === "Home" ? (
        <Home onNavigate={() => setCurrentScreen("Amostra")} />
      ) : (
        <Amostra onGoBack={() => setCurrentScreen("Home")} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
});
