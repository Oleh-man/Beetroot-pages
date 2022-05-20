import React from "react";
import BurgerItem from "./Burger-item";
import './Builder.css'

class Builder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            totalPrice: 0,

        }
    }

    ingrediientQuantity = () => {
        
    }

    render() {
        return (
            <div className="builder">
                <BurgerItem ingredients={this.props.ingredients}/>
                <div className="total-price">Total = 0</div>
                <button>Checkout</button>
            </div>
        );
    }
};

export default Builder;