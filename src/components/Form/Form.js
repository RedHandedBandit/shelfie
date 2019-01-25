import React, {Component} from 'react';

class Form extends Component {

    constructor(){
        super()
        this.state ={
            name: '',
            price: 0,
            image: ''
        }
    }

    handleImage(value){
        this.setState({image: value})
    }

    handleName(value){
        this.setState({name: value})
    }

    handlePrice(value){
        this.setState({price: value})
    }

    handleCancelButton(){
        this.setState({name: '', price: 0, image: ''})
    }

    render(){
        console.log(this.state)
        return(
            <div > 
                <div>
                <input onChange={(e) => this.handleImage(e.target.value)} 
                    value={this.state.image}
                    style={{margin: '2px'}} 
                    placeholder="image URL" />

                <input onChange={(e) => this.handleName(e.target.value)}
                     value={this.state.name}
                     style={{margin: '2px'}} 
                     placeholder="Product Name" />

                <input onChange={(e) => this.handlePrice(e.target.value)} 
                    value={this.state.price}
                    style={{margin: '2px'}} 
                    placeholder="Price" />

                <button> Add </button>
                <button onClick={() => this.handleCancelButton()}> Cancel </button>
                 </div>
            
                Form
            </div>
        )
    }
}

export default Form;