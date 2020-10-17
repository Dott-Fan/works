import React, { Component, Suspense, lazy } from 'react'

import GlobalStyle from './assets/style'
import { Route} from 'react-router-dom'
import Index from './pages/index/Index'
import Detail from './pages/detail'
import Cart from './pages/cart'

class App extends Component {


  render() {
    return (
      <>
        <GlobalStyle />

        <Suspense fallback='等待中'>
          <Route exact path="/" component={ Index } />
          <Route path="/detail" component={ Detail } />
          <Route path="/cart" component={ Cart } />
        </Suspense>
      </>
    )
  }
}

export default App