import 'styled-components'
import { Theme } from '../Styles/themes/default'

type ThemeType = typeof Theme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
