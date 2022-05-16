import BurgerItem from "./Burger-item";
import './Builder.css'

function Builder() {
    return (
        <div className="builder">
            <BurgerItem/>
            <BurgerItem/>
            <BurgerItem/>
            <BurgerItem/>
            <BurgerItem/>
            <BurgerItem/>
            <button>Checkout</button>
        </div>
    );
};

export default Builder;