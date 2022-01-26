import React from 'react'
import { Route } from 'react-router-dom'

import { Header } from './components'

const App = () => {
  
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" exact />
        <Route path="/"  exact />
      </div>
    </div>
  );
}

export default App