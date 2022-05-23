import React from "react";
import BurgerItem from "./Burger-item";
import './Builder.css'

class Builder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bacon: 0,
            cheese: 0,
            pickle: 0,
            chicken: 0,
            meat: 0,
            salad: 0,
            ingredients: [],
            ingredientCount: 0,
            totalPrice: 1

        }
    }

    componentDidMount = () => {
        fetch('https://beetroot-burger-app.herokuapp.com/ingredients')
            .then((res) => res.json())
            .then(data => {
                this.setState((prevState) => {
                    return {
                        ...prevState,
                        ingredients: data[0].ingredients
                    }
                })
            })
    }

    findPrice = (ingName) => this.state.ingredients.find(elem => elem.name === ingName).price

    cahgeIngrediientQuantity = (e) => {
        e.preventDefault();

       switch (e.target.dataset.action) {
           case 'add':
               this.addItem(e.target.dataset.ingre)
               break;
               
               case 'remove':
               this.removeItem(e.target.dataset.ingre)
               break;
       
           default:
               break;
       }

    }

    addItem = (item) => {
        if (this.state[item] < 5) {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    [item]: prevState[item] + 1,
                    totalPrice: prevState.totalPrice + this.findPrice(item)
                }
            })

        }
    }

    removeItem = (item) => {
        if (this.state[item] > 0) {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    [item]: prevState[item] - 1,
                    totalPrice: prevState.totalPrice - this.findPrice(item)
                }
            })

        }
    }

    render() {
        return (
            <div className="builder">
                <BurgerItem ingredients={this.state.ingredients} cahgeIngrediientQuantity={this.cahgeIngrediientQuantity} count={this.state}/>
                <div className="total-price">Total = {this.state.totalPrice.toFixed(2)}$</div>
                <button disabled={this.state.totalPrice.toFixed(2) > 1 ? false : true}>Checkout</button>
            </div>
        );
    }
};

export default Builder;