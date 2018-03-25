import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import style from './style.styl'
import HomePage from 'components/HomePage'
import Page1 from 'components/Page1'
import Page2 from 'components/Page2'
import Page3 from 'components/Page3'


class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/page1" exact  component={Page1} />
        <Route path="/page2" exact  component={Page2} />
        <Route path="/page3" exact  component={Page3} />
      </div>
    )
  }
 }
  

export default App

