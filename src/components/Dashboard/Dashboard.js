import React, {Component} from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {

    constructor(){
        super()
    }

    render(){
        // let newInventory = this.props.inventory.map((el,index) => {
        //     return(
        //         <Product key={index} info={el} />
        //     )
        // })
        return(
            <div> 
                Dashboard
                {/* {newInventory} */}
                
            </div>
        )
    }
}

export default Dashboard