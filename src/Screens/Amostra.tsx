import { Alert, ScrollView, StyleSheet, TouchableOpacity } from "react-native";

// Nossas importações limpas via Absolute Imports
import { Avatar } from "@/Components/Avatar";
import { Box } from "@/Components/Box";
import { Button } from "@/Components/Buttons";
import { Card } from "@/Components/Card";
import { Header } from "@/Components/Header";
import { Input } from "@/Components/Input";
import { A, H1, H2, H3, H4, LI, P1, P2, P3 } from "@/Components/Text";
import { Theme } from "@/Theme";

interface AmostraProps {
  onGoBack: () => void;
  onNavigateToPerfil: () => void; // Propriedade adicionada para a navegação
}

export function Amostra({ onGoBack, onNavigateToPerfil }: AmostraProps) {
  return (
    <Box flex={1} bg="background">
      {/* Header Fixo no topo com Avatar Clicável */}
      <Header
        title="DESIGN SYSTEM"
        onBackPress={onGoBack}
        rightComponent={
          <TouchableOpacity onPress={onNavigateToPerfil}>
            <Avatar size={36} fallback="JS" />
          </TouchableOpacity>
        }
      />

      {/* Usando ScrollView para podermos rolar a tela tranquilamente */}
      <ScrollView contentContainerStyle={styles.scroll}>
        <H1 align="center">Catálogo do Sistema</H1>

        <Box mb="xl" style={{ marginTop: Theme.spacing.sm }}>
          <P2 color="textSecondary" align="center">
            Visualizando nossa tipografia, componentes e tamanhos de Card.
          </P2>
        </Box>

        {/* --- Card Mini --- */}
        <Card size="mini" mb="md">
          <H3>Card pequeno</H3>
          <P2 color="textSecondary">
            Ideal para pequenos blocos de informação ou alertas curtos.
          </P2>
        </Card>

        {/* --- Card Normal (Catálogo Tipográfico) --- */}
        <Card mb="md">
          <H2>Card Normal/Padrão</H2>
          <P2 color="textSecondary" style={{ marginBottom: Theme.spacing.md }}>
            Componentes de texto:
          </P2>
          <Box bg="border" mb="md" style={{ height: 1 }} />
          {/* Títulos */}
          <H3>Título H3</H3>
          <H4 color="primary">Título H4 (Destacado)</H4>
          <Box
            bg="border"
            mb="md"
            style={{ marginTop: Theme.spacing.md, height: 1 }}
          />
          {/* Parágrafos */}
          <P1>Este é o parágrafo P1, ideal para textos de maior destaque.</P1>
          <P2 color="textSecondary">
            Este é o parágrafo P2, que serve como corpo de texto padrão para o
            app.
          </P2>
          <P3 color="textDisabled">
            E este é o P3, usado para legendas e notas de rodapé minúsculas.
          </P3>
          <Box
            bg="border"
            mb="md"
            style={{ marginTop: Theme.spacing.md, height: 1 }}
          />
          {/* Listas e Links */}
          <A onPress={() => Alert.alert("Link clicado!")}>
            Isso simula um link clicável
          </A>
          <Box mb="sm" /> {/* Espaçador rápido */}
          <P2>Lista de Tecnologias:</P2>
          <LI>React Native</LI>
          <LI>TypeScript</LI>
          <LI>Expo</LI>
        </Card>

        {/* --- Card Big --- */}
        <Card size="big">
          <H1>Card Grande</H1>
          <P1>Um card com espaçamento generoso.</P1>
          <P2 color="textSecondary">
            Ideal para destaques principais, banners de promoção ou conteúdos
            que precisam de bastante respiro e uma grande área de clique.
          </P2>
        </Card>

        {/* Espaçamento em vez de <br /> */}
        <Box mb="md" />

        {/* --- Formulários e Inputs --- */}
        <Card mb="md">
          <H2>Inputs</H2>

          <Input
            label="Input 100%"
            placeholder="Input 100%"
            keyboardType="email-address"
            autoCapitalize="none"
            width="full"
          />

          <Input
            label="Input 250px"
            placeholder="Digite sua senha"
            secureTextEntry
            width={250}
          />

          {/* Exemplo de uso com dois inputs fixos lado a lado */}
          <Box
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Input label="Input 100px" placeholder="Input 100px" width={100} />
            <Input label="Input 150px" placeholder="Input 150px" width={150} />
            <Input label="Input 300px" placeholder="Input 300px" width={300} />
          </Box>

          <Input
            label="Confirmação"
            placeholder="Erro de validação"
            error="As senhas não coincidem."
            secureTextEntry
          />
        </Card>

        {/* --- Botões e Ações --- */}
        <Card mb="md">
          <H2>Botões</H2>

          <Button
            title="Botão Principal (Solid)"
            onPress={() => Alert.alert("Solid press")}
            style={{ marginBottom: Theme.spacing.md }}
          />

          <Button
            title="Botão Secundário (Outline)"
            variant="outline"
            onPress={() => Alert.alert("Outline press")}
            style={{ marginBottom: Theme.spacing.md }}
          />

          <Button
            title="Botão Fantasma (Ghost)"
            variant="ghost"
            onPress={() => Alert.alert("Ghost press")}
            style={{ marginBottom: Theme.spacing.md }}
          />

          <Button
            title="Carregando..."
            isLoading
            style={{ marginBottom: Theme.spacing.md }}
          />

          <Button title="Voltar" variant="outline" onPress={onGoBack} />
        </Card>
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  scroll: {
    padding: Theme.spacing.lg,
    paddingBottom: Theme.spacing.xxl, // Respiro extra no final da tela para o usuário conseguir rolar além do último card
  },
});
