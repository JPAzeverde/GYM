import { Box, BoxProps } from "@/Components/Box";
import { Theme } from "@/Theme";

type CardSize = "mini" | "normal" | "big";

export interface CardProps extends BoxProps {
  size?: CardSize;
}

export function Card({ size = "normal", style, children, ...rest }: CardProps) {
  // Mapeamos os espaçamentos, bordas e altura mínima com base no tamanho
  const sizeConfig = {
    mini: { p: "sm", radius: "sm", minHeight: undefined },
    normal: { p: "lg", radius: "md", minHeight: 120 },
    big: { p: "xl", radius: "lg", minHeight: 240 },
  } as const;

  const currentConfig = sizeConfig[size];

  return (
    <Box
      bg="surface"
      p={currentConfig.p}
      radius={currentConfig.radius}
      style={[
        Theme.shadows.soft,
        currentConfig.minHeight ? { minHeight: currentConfig.minHeight } : {},
        style,
        { padding: Theme.spacing.md },
      ]}
      {...rest}
    >
      {children}
    </Box>
  );
}
