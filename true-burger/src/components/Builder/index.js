import './Builder.css'

const Builder = (props) => {
    return (
        <>
            <div className="burger_builder">
                <h2>
                    Burger price: {props.totalPrice.toFixed(2)} ₴
                </h2>
                <img src={require(`../../images/top-bun.png`)} alt='top-bun' />
                <img src={require(`../../images/bottom-bun.png`)} alt='bottom-bun' />
            <button disabled={props.totalPrice.toFixed(2) > 1 ? false : true}>Checkout</button>
            </div>
        </>
    )
}
export default Builder
