import React from "react";
import BurgerItem from "./Burger-item";
import './Builder.css'

class Builder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredientCount: 0,
            totalPrice: 1,

        }
    }

    cahgeIngrediientQuantity = (e) => {
        e.preventDefault();

        console.log(e);
        console.log(e.target.dataset.action);

        switch (e.target.dataset.action) {
            
            case 'add':
                
                break;
        
            case 'remove':
                
                break;
        
            default:
                break;
        }

    }

    render() {
        return (
            <div className="builder">
                <BurgerItem ingredients={this.props.ingredients} cahgeIngrediientQuantity={this.cahgeIngrediientQuantity}/>
                <div className="total-price">Total = {this.state.totalPrice}</div>
                <button>Checkout</button>
            </div>
        );
    }
};

export default Builder;