import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from 'pages/Home/Home'
import Details from 'pages/Details/Details'

import logo from 'assets/logos/logo.svg'
import 'App.css'

function App () {
  return (
    <Router>
      <div className='app-content'>
        <header className='header-search'>
          <img src={logo} className='logo' alt='Logo Whats in' />
        </header>

        <Route exact path='/' component={Home} />
        <Route exact path='/movie/:imdbID' component={Details} />
      </div>
    </Router>
  )
}

export default App
