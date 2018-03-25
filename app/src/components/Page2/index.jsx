import React from 'react'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import style from './style.styl'


const Page2 = (props) => (
  <div>
    <p><Link to="/">Home</Link></p>
    <h2>Page 2 component</h2>
    prop2 = {props.appStore.prop2}
  </div>
)


export default inject("appStore")(observer(Page2))

