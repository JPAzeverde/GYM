export const typography = {
  fonts: {
    title: "BebasNeue-Regular", // Certifique-se de carregar a fonte com este nome no App.tsx
    body: "System", // Fonte padrão do sistema (San Francisco no iOS, Roboto no Android) para melhor legibilidade em textos longos
  },
  sizes: {
    xs: 12,
    sm: 14,
    md: 16, // Base (p2)
    lg: 20, // (p1)
    xl: 24, // (h4)
    xxl: 32, // (h3/h2)
    xxxl: 48, // (h1)
  },
  weights: {
    regular: "400" as const,
    medium: "500" as const,
    bold: "700" as const,
  },
};
