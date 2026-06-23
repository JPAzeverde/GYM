import { ScrollView, StyleSheet } from "react-native";

// Nossas importações limpas via Absolute Imports
import { Box } from "@/Components/Box";
import { Card } from "@/Components/Card";
import { A, H1, H2, H3, H4, LI, P1, P2, P3 } from "@/Components/Text";
import { Theme } from "@/Theme";

interface AmostraProps {
  onGoBack: () => void;
}

export function Amostra({ onGoBack }: AmostraProps) {
  return (
    <Box flex={1} bg="background">
      {/* Usando ScrollView para podermos rolar a tela tranquilamente */}
      <ScrollView contentContainerStyle={styles.scroll}>
        <H1 align="center">Catálogo do Sistema</H1>

        <Box mb="xl" style={{ marginTop: Theme.spacing.sm }}>
          <P2 color="textSecondary" align="center">
            Visualizando nossa tipografia e os tamanhos de Card.
          </P2>
        </Box>

        {/* --- Card Mini --- */}
        <Card size="mini" mb="md">
          <H3>Card Mini</H3>
          <P2 color="textSecondary">
            Ideal para pequenos blocos de informação ou alertas curtos.
          </P2>
        </Card>

        {/* --- Card Normal (Catálogo Tipográfico) --- */}
        {/* O 'size' é omitido aqui pois 'normal' já é o tamanho padrão */}
        <Card mb="md">
          <H2>Card Normal (Padrão)</H2>
          <P2 color="textSecondary" style={{ marginBottom: Theme.spacing.md }}>
            Aproveitamos este card médio para demonstrar nossos componentes de
            texto:
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
          <A>Isso simula um link clicável</A>
          <Box mb="sm" /> {/* Espaçador rápido */}
          <P2>Lista de Tecnologias:</P2>
          <LI>React Native</LI>
          <LI>TypeScript</LI>
          <LI>Expo</LI>
        </Card>

        {/* --- Card Big --- */}
        <Card size="big" mb="xl">
          <H1>Card Big</H1>
          <P1>Um card com espaçamento generoso.</P1>
          <P2 color="textSecondary">
            Ideal para destaques principais, banners de promoção ou conteúdos
            que precisam de bastante respiro e uma grande área de clique.
          </P2>
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
