import '@babel/polyfill'

import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Header from './components/Header'
import Footer from './components/Footer'
import PageHome from './components/PageHome'
import Page404 from './components/Page404'

import './css/styles.css'

render(
  <>
    <Helmet>
      <title>cdunn.io</title>
      <meta name="robots" content="index, follow" />
      <meta name="author" content="@cdunnnnnnn" />
      <link rel="canonical" href="https://cdunn.io" />
    </Helmet>
    <div className="container text-black mx-auto p-8">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={PageHome} />
          <Route path="/404" component={Page404} />
          <Route component={Page404} />
        </Switch>
      </Router>
      <Footer />
    </div>
  </>,
  document.getElementById('root')
)
