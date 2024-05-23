import React, { Component } from 'react'

export default class ClassExample extends Component {
  state={
    name:"ravi",
    age:25
         

  }
  render() {
    return (
      <div>
        <p>Name is:{this.state.name}</p>
        <p>Age is:{this.state.age}</p>
      </div>
    )
  }
}
