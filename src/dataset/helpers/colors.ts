const ColorPalette = [
  '#003f5c',
  '#444e86',
  '#955196',
  '#dd5182',
  '#ff6e54',
  '#ffa600',
].reverse()

export const generateColor = (i: number) =>
  ColorPalette[i % ColorPalette.length]
