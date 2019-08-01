import Color from 'color'

export function textColor(color, theme) {
  try {
    return Color(color).isDark()
      ? (theme && theme.colors && theme.colors.white) || '#fff'
      : (theme && theme.colors && theme.colors.text) || '#000'
  } catch (err) {
    return color
  }
}

export function darken(color, percent = 0) {
  try {
    return Color(color)
      .darken(percent / 100)
      .hex()
  } catch (err) {
    return color
  }
}

export function lighten(color, percent = 0) {
  try {
    return Color(color)
      .lighten(percent / 100)
      .hex()
  } catch (err) {
    return color
  }
}
