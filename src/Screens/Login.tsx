import { Box } from "@/Components/Box";
import { Button } from "@/Components/Buttons";
import { Card } from "@/Components/Card";
import { Input } from "@/Components/Input";
import { H1, P2 } from "@/Components/Text";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

// 1. Tipagem das propriedades (props) que a tela recebe do App.tsx
interface LoginProps {
  onNavigateToRegistro: () => void;
  onLoginSuccess: () => void;
}

// 2. Recebendo as props no componente
export function Login({ onNavigateToRegistro, onLoginSuccess }: LoginProps) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Box flex={1} bg="background" justify="center" align="center" px="lg">
          {/* Cabeçalho */}
          <Box mb="xl" align="center">
            <H1>BEM-VINDO</H1>
            <P2 color="textSecondary">Faça login para continuar</P2>
          </Box>

          {/* Formulário */}
          <Card size="big" style={{ maxWidth: 600, width: "100%" }}>
            <Input
              label=""
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input label="" placeholder="Senha" secureTextEntry />

            <Box mt="md">
              {/* 3. Função que leva o usuário logado para a Home */}
              <Button title="Entrar" variant="solid" onPress={onLoginSuccess} />
            </Box>

            <Box mt="sm">
              <Button
                title="Esqueci minha senha"
                variant="ghost"
                // onPress={...} // Aqui você pode adicionar a lógica de esqueci a senha no futuro
              />
            </Box>
          </Card>
          <br />

          {/* Rodapé */}
          <Box mt="xl" align="center">
            {/* 4. Função que navega para a tela de Registro */}
            <Button
              title="Não tem uma conta? Cadastre-se"
              variant="outline"
              onPress={onNavigateToRegistro}
            />
          </Box>
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
