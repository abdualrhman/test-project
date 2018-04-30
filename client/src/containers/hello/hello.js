import React, { Component } from 'react';


export default class Hello extends Component {
  constructor(props){
    super(props)
    this.state={
      value : null
    }
  }
  componentDidMount(){
    //this.fetchData()
  }
  // fetchData(){
  //   fetch('/hello', {
  //     method : 'get'
  //   })
  //   .then(function(response){
  //     return response.json()
  //   })
  //   .then((data)=>{
  //     console.log('bla',data)
  //     this.setState({
  //       value : data
  //     }, ()=>{console.log(data)})
  //   })
  // }
  render() {
    return (
      <div>
        this is the hello file
      </div>
    );
  }
}
