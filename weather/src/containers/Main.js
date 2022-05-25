import React from 'react'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    changeInputSize = (e) => {
        console.dir(e.target)
        console.log(e.target.placeholder.length)
        console.log(e.target.placeholder.value)
        e.target.style.width = `${e.target.placeholder.length}ch`
    }

    render() {
        return (
            <main className="wrapper">
                <h1>Weather Checker</h1>
                <div className='input-container'>
                    <p className='input-container__question'>Want to know Weather in<input onKeyDown={this.changeInputSize} className='city-name' type="text" placeholder='(your place)' />?</p>
                    <div className='input-container__check'>
                        <span className='input-container__check--span'>Just <button className='input-container__check--btn'>Check it</button></span>
                    </div>
                </div>
            </main>
        )
    }
}

export default Main