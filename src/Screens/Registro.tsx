import { Box } from "@/Components/Box";
import { Button } from "@/Components/Buttons";
import { Card } from "@/Components/Card";
import { Input } from "@/Components/Input";
import { P2 } from "@/Components/Text";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

interface RegistroProps {
  onNavigateToLogin: () => void;
}

export function Registro({ onNavigateToLogin }: RegistroProps) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Box flex={1} bg="background" justify="center" px="lg" py="xl">
          {/* Cabeçalho */}
          <Box mb="xl" align="center">
            <H1>CRIAR CONTA</H1>
            <P2 color="textSecondary">Preencha os dados abaixo</P2>
          </Box>

          {/* Formulário */}
          <Card size="big" tyle={{ maxWidth: 600, width: "100%" }}>
            <Input placeholder="Nome completo" autoCapitalize="words" />
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder="Senha" secureTextEntry />
            <Input placeholder="Confirmar senha" secureTextEntry />

            <Box mt="md">
              <Button title="Cadastrar" variant="solid" />
            </Box>
          </Card>

          {/* Rodapé */}
          <Box mt="lg" align="center">
            <Button
              title="Já possui conta? Faça Login"
              variant="ghost"
              onPress={onNavigateToLogin}
            />
          </Box>
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
