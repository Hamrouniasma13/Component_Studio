import React from 'react'
import { default as defaultTheme } from '../theme'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import { merge } from 'lodash'

export const ThemeContext = React.createContext(defaultTheme)

// Used in Admin portal, for color selector
export const ThemeContextProvider = ({ children, theme = {} }) => {
  return (
    <ThemeContext.Provider value={merge({}, defaultTheme, theme || {})}>
      {children}
    </ThemeContext.Provider>
  )
}

// Main theme provider, used in all portals and website studio
export default function ThemeProvider({ children, theme }) {
  return (
    <EmotionThemeProvider theme={merge({}, defaultTheme, theme || {})}>
      {children}
    </EmotionThemeProvider>
  )
}
