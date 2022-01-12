import React, { Component } from 'react'; //importing React and Component so that we can create React component

class MenuItem extends Component {
    render() {
        console.log("logging this.props", this.props)
        let {dish, price} = this.props

        return <div> 
            <h1>{dish}</h1>
            <p>Price: {price} (Inflation doe)</p>
            <p>Description: Its good but inflation tho'</p>
            <p>Number of likes: 2</p>
        </div>
        
    }
}
    
export default MenuItem; //export the class so that it is importable from other files
