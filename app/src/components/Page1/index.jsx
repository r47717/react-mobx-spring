import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import style from './style.styl'


@inject("appStore") 
@observer
class Page1 extends Component {

  render() {
    const store =this.props.appStore

    return (
      <div>
        <p><Link to="/">Home</Link></p>
        <h2>Page 1 component</h2>
        <h3>List of props</h3>
        <ul>
        {          
          store.arr.map((item, id) => <li key={id}>{item}</li> )
        }
        </ul>
        <button onClick={() => {store.alterProps()}}>Alter props</button>
        <p>arr: {JSON.stringify(store.arr)}</p>
        <p>len: {store.arr.length}</p>
      </div>
    ) 
  }
}


export default Page1
