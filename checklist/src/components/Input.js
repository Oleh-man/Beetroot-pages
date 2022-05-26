import React from 'react'

const Input = (props) => {

    // onLableChange = (e) => {
    //     this.setState({
    //         label: e.target.value
    //     })
    //     console.log(this.state.label)
    // }

    // addItem = () => {

    // }

        return (
            <>
                <input type="text" placeholder="Tap your task" onChange={props.onLableChange}/>
                <button onClick={props.addItem}>tap</button>
            </>
        )
}

export default Input

