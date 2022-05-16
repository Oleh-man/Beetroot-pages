import React from 'react'
import './Burger-item.css'

class BurgerItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.itemName,
            price: props.itemPrice,
            count: 0,
            countPrice: 0
        }
    }

    addItem = () => {
        this.setState((oldState) => {
            if(oldState.count < 5) {
                return {
                    ...oldState,
                    count: oldState.count + 1,
                    countPrice: oldState.countPrice + oldState.price
                }          
            } 
        })
    }
    removeItem = () => {
        this.setState((oldState) => {
            if(oldState.count <= 5 && oldState.count > 0) {
                return {
                    ...oldState,
                    count: oldState.count - 1,
                    countPrice: oldState.countPrice - oldState.price

                }          
            } 
        })
    }


    render() {
        return (
            <div className="builder__item">
                    <p className="builder__item--name">{this.state.name} - <span>{this.state.price}$</span></p>
                    <button className="item--remove-btn" onClick={this.removeItem}>-</button>
                    <span className="item--count">{this.state.count}</span>
                    <button className="item--add-btn" onClick={this.addItem}>+</button>
                    <p className="count-price">{this.state.countPrice}$</p>
                    
            </div>
        )
    }

}

export default BurgerItem;