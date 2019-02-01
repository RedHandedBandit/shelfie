import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import axios from 'axios';


class App extends Component {

  constructor(){
    super()
    this.state ={ 
      inventory: []
      }
    this.componentDidMount = this.componentDidMount.bind(this)
  }



  componentDidMount(){
    // console.log('component did mount')
    axios.get(`/api/products`).then(
      response => {
        // console.log('do i have a resonse',response)
        this.setState({inventory: response.data})
        // console.log('did response come', response.data)
      }
    )
  }


  


  render() {
    let thisInventory = this.state.inventory.map((el, i) => {
      return (
        <div key={i}> 
          <h3> {el.product_name} </h3>
          <h3> {el.product_price} </h3>
        </div>
      )
     
    }) 
    return (
      <div className="App">
        <Dashboard />
        <Form />
        <Header />
        {/* {console.log('is this empty',this.state.inventory)} */}
        {thisInventory} 
       
      

      </div>
    );
  }
}

export default App;
