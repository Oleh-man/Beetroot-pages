import BurgerItem from "./Burger-item";
import './Builder.css'

function Builder() {
    return (
        <div className="builder">
            <BurgerItem itemName={'Meat'} itemPrice={5}/>
            <BurgerItem itemName={'Chease'} itemPrice={3}/>
            <BurgerItem itemName={'Salad'} itemPrice={2.5}/>
            <BurgerItem itemName={'Tomatoes'} itemPrice={1.75}/>
            <BurgerItem itemName={'Pickles'} itemPrice={2.25}/>
            <BurgerItem itemName={'Bacon'} itemPrice={4}/>
            <div className="total-price">Total = 0</div>
            <button>Checkout</button>
        </div>
    );
};

export default Builder;