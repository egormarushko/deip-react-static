import React from 'react'
import ReactGA from 'react-ga'

ReactGA.initialize('UA-114332532-1');
ReactGA.pageview(window.location.pathname + window.location.search);

export default () => (
  <div>
    <h1>404 - Oh no's! We couldn't find that page :(</h1>
  </div>
)
