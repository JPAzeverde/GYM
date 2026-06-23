import { Theme } from "@/Theme";
import { Alert, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

// Imports dos seus componentes customizados
import { Avatar } from "@/Components/Avatar";
import { Box } from "@/Components/Box";
import { Button } from "@/Components/Buttons";
import { Card } from "@/Components/Card";
import { Header } from "@/Components/Header";
import { Input } from "@/Components/Input";
import { H2, H3, P2 } from "@/Components/Text";

interface PerfilProps {
  onGoBack: () => void;
}

export function Perfil({ onGoBack }: PerfilProps) {
  return (
    <Box flex={1} bg="background">
      {/* Cabeçalho */}
      <Header title="MEU PERFIL" onBackPress={onGoBack} />

      <ScrollView contentContainerStyle={styles.scroll}>
        {/* --- Destaque: Foto e Nome --- */}
        <Box style={styles.profileHeader} mb="lg">
          <TouchableOpacity
            onPress={() => Alert.alert("Mudar foto", "Abrir galeria...")}
          >
            <Avatar size={150} fallback="NC" />
            <Box style={styles.editBadge}>
              <P2 color="textPrimary" style={{ fontSize: 10 }}>
                EDITAR
              </P2>
            </Box>
          </TouchableOpacity>
          <H2 style={{ marginTop: Theme.spacing.md }}>Nome Completo</H2>
        </Box>

        {/* --- Card: Dados Pessoais --- */}
        <Card mb="md">
          <H3 style={{ marginBottom: Theme.spacing.md }}>Dados Pessoais</H3>

          <Input
            label="Nome Completo"
            placeholder="Nome Completo"
            width="full"
          />

          <Input
            label="E-mail"
            placeholder="email@email.com"
            keyboardType="email-address"
            autoCapitalize="none"
            width="full"
          />
        </Card>

        {/* --- Card: Segurança (Mudar Senha) --- */}
        <Card mb="lg">
          <H3 style={{ marginBottom: Theme.spacing.md }}>Segurança</H3>

          <Input
            label="Senha Atual"
            placeholder="Digite sua senha atual"
            secureTextEntry
            width="full"
          />

          <Input
            label="Nova Senha"
            placeholder="Digite a nova senha"
            secureTextEntry
            width="full"
          />

          <Input
            label="Confirmar Nova Senha"
            placeholder="Repita a nova senha"
            secureTextEntry
            width="full"
          />
        </Card>

        {/* --- Ações Principais --- */}
        <Button
          title="Salvar Alterações"
          onPress={() =>
            Alert.alert("Sucesso", "Dados atualizados com sucesso!")
          }
          style={{ marginBottom: Theme.spacing.md }}
        />

        <Button
          title="Sair da Conta"
          variant="ghost"
          // Se quiser usar a cor de erro no texto do botão fantasma, dependendo de como
          // seu Button.tsx está estruturado, você pode passar a prop color ou apenas
          // usar o padrão.
          onPress={() => Alert.alert("Logout", "Deseja realmente sair?")}
        />
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  scroll: {
    padding: Theme.spacing.md,
    paddingBottom: Theme.spacing.xxl,
  },
  profileHeader: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: Theme.spacing.md,
  },
  editBadge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: Theme.colors.surfaceHighlight,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: Theme.radius.pill,
    borderWidth: 2,
    borderColor: Theme.colors.background,
  },
});
