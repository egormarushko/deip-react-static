import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default {
  siteRoot: 'http://deip.me',
  getSiteProps: () => ({
    title: 'DEIP — decentralized research platform'
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/containers/Index',
        getProps: () => ({ someData: 'someData' }),
      },
      {
        path: '/join',
        component: 'src/containers/Join',
        getProps: () => ({ someData: 'someData' }),
      },
      {
        path: '/whitepaper',
        component: 'src/containers/Whitepaper',
        getProps: () => ({ someData: 'someData' }),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, maximum-scale=1"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;subset=cyrillic"
              rel="stylesheet"
            />
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            />

            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
