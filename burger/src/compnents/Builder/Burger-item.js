import './Burger-item.css'

function BurgerItem() {
    
    return (
        <div className="builder__item">
                <p className="builder__item--name"></p>
                <button className="item--remove-btn">-</button>
                <span className="item--count">0</span>
                <button className="item--add-btn">+</button>
        </div>
    )
}

export default BurgerItem;