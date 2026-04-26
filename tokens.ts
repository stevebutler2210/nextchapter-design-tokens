export const colors = {
  surface: "#fcf9f5",
  surfaceContainerLowest: "#ffffff",
  surfaceContainerLow: "#f7f4f0",
  surfaceContainer: "#f0ede9",
  surfaceContainerHigh: "#e5e2de",
  surfaceContainerHighest: "#dbd8d4",
  surfaceVariant: "#e1ddd8",
  onSurface: "#1c1c1a",
  primary: "#89453a",
  primaryContainer: "#f4ebe9",
  onPrimary: "#ffffff",
  tertiary: "#7a826e",
  tertiaryContainer: "#eff1ed",
  outline: "#85827e",
  outlineVariant: "#d1cfcc",
} as const

export type ColorToken = keyof typeof colors
