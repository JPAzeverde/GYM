import { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

// Importações para a Fonte
import { BebasNeue_400Regular, useFonts } from "@expo-google-fonts/bebas-neue";
import * as SplashScreen from "expo-splash-screen";

// Importações das Telas
import { Amostra } from "@/Screens/Amostra";
import { Home } from "@/Screens/Home";
import { Login } from "@/Screens/Login";
import { Perfil } from "@/Screens/Perfil";
import { Registro } from "@/Screens/Registro";

// Mantém a tela de carregamento (splash) ativa enquanto a fonte baixa
SplashScreen.preventAutoHideAsync();

// <-- Adicionamos "Perfil" aqui
type Screen = "Home" | "Amostra" | "Perfil" | "Login" | "Registro";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("Login");

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

  // Função para facilitar a renderização da tela correta
  const renderScreen = () => {
    switch (currentScreen) {
      case "Login":
        return (
          <Login
            onNavigateToRegistro={() => setCurrentScreen("Registro")}
            onLoginSuccess={() => setCurrentScreen("Home")}
          />
        );
      case "Registro":
        return (
          <Registro
            onNavigateToLogin={() => setCurrentScreen("Login")}
            onRegisterSuccess={() => setCurrentScreen("Home")}
          />
        );
      case "Home":
        return <Home onNavigate={() => setCurrentScreen("Amostra")} />;
      case "Amostra":
        return (
          <Amostra
            onGoBack={() => setCurrentScreen("Home")}
            onNavigateToPerfil={() => setCurrentScreen("Perfil")}
          />
        );
      case "Perfil":
        return <Perfil onGoBack={() => setCurrentScreen("Amostra")} />;
      default:
        return (
          <Login
            onNavigateToRegistro={() => setCurrentScreen("Registro")}
            onLoginSuccess={() => setCurrentScreen("Home")}
          />
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      {renderScreen()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
});
