import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import style from './style.styl'


export default inject("appStore")(observer((props) => (
  <div>
    <p><Link to="/">Home</Link></p>
    <h2>Page 3 component</h2>
    prop3 = {props.appStore.prop3}
  </div>
)))

