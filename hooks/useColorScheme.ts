// Inclusion 360 está diseñado en light-only para garantizar contraste WCAG AA
// sobre la paleta cálida (#FFF9F8 + #1A1A1A). Forzamos light en todas las plataformas.
export function useColorScheme(): 'light' {
  return 'light';
}
