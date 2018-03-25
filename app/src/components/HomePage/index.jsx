import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import style from './style.styl'


export default () => (
  <div>
    <p><Link to="/page1">Page 1</Link></p>
    <p><Link to="/page2">Page 2</Link></p>
    <p><Link to="/page3">Page 3</Link></p>
  </div>
)

