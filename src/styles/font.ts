import theme from "./theme";

const fontGenerator = (size: string, weight: number, lineHeight: string) => ({
  fontWeight: weight,
  fontSize: size,
  lineHeight: lineHeight,
});

const font = {
  titleLarge: fontGenerator(
    theme.font.titleLarge.fontSize,
    theme.font.titleLarge.fontWeight,
    theme.font.titleLarge.lineHeight
  ),
  titleMedium: fontGenerator(
    theme.font.titleMedium.fontSize,
    theme.font.titleMedium.fontWeight,
    theme.font.titleMedium.lineHeight
  ),
  textMedium: fontGenerator(
    theme.font.textMedium.fontSize,
    theme.font.textMedium.fontWeight,
    theme.font.textMedium.lineHeight
  ),
  textSmall: fontGenerator(
    theme.font.textSmall.fontSize,
    theme.font.textSmall.fontWeight,
    theme.font.textSmall.lineHeight
  ),
};

export default font;
