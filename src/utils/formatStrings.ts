export const formatDecimal = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'decimal'
  }).format(value);
