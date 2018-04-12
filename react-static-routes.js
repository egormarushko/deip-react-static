
    import React, { Component } from 'react'
    import { Route } from 'react-router-dom'

    import src_containers_Index from '../src/containers/Index'
import src_containers_Join from '../src/containers/Join'
import src_containers_Whitepaper from '../src/containers/Whitepaper'
import src_containers_Tokensale from '../src/containers/Tokensale'
import src_containers_404 from '../src/containers/404'
    const templateMap = {
    t_0: src_containers_Index,
t_1: src_containers_Join,
t_2: src_containers_Whitepaper,
t_3: src_containers_Tokensale,
t_4: src_containers_404
  }
    const templateTree = {c:{"404":{t:"t_4"},"/":{t:"t_0"},"join":{t:"t_1"},"whitepaper":{t:"t_2"},"tokensale":{t:"t_3"}}}
    
    const getTemplateForPath = path => {
      const parts = path === '/' ? ['/'] : path.split('/').filter(d => d)
      let cursor = templateTree
      try {
        parts.forEach(part => {
          cursor = cursor.c[part]
        })
        return templateMap[cursor.t]
      } catch (e) {
        return false
      }
    }
  

    export default class Routes extends Component {
      render () {
        return (
            
    <Route path='*' render={props => {
      let Template = getTemplateForPath(props.location.pathname)
      if (!Template) {
        Template = getTemplateForPath('404')
      }
      return Template && <Template {...props} />
    }} />
  
        )
      }
    }
  