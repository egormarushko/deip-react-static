import { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'

export const container = p => css`
  max-width: ${p => p.theme.sizes.maxWidth};
  margin-left: auto;
  margin-right: auto;
`

export const m = generateMedia({
  small: '900px',
  medium: '1024px',

})
