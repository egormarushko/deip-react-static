import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'

import Routes from 'react-static-routes'

injectGlobal`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: Roboto, sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`

const theme = {
  sizes: {
    maxWidth: '1280px',
  },
  palette: {
    accent: '#e71d36',
    primary: '#331d50',
    primaryLight: 'rgba(51,29,80,0.5)',
    text: {
      primary: 'rgba(0,0,0,.87)',
      secondary: 'rgba(0,0,0,.26)',
      accent: '#331d50',
    },
    background: {
      primary: '#fcf9ff',
    },
  },
}

export default () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Routes />
    </Router>
  </ThemeProvider>
)
