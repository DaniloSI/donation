export const formatDecimal = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    maximumFractionDigits: 2
  }).format(value);
