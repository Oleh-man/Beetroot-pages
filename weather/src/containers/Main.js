import React from 'react'
import CurrentWeather from '../components/CurrentWeather'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    changeInputSize = (e) => {
        console.dir(e.target)
        console.log(e.target.value)
        e.target.style.width = `${e.target.value.length}ch`
        if (!e.target.value || e.target.value === '') {
            e.target.style.width = `9.5ch`
        }
    }

    render() {
        return (
            <main className="wrapper">
                <h1>Weather Checker</h1>
                <div className='input-container'>
                    <p className='input-container__question'>Want to know Weather in <input onChange={this.changeInputSize} className='city-name' type="text" placeholder='(your place)' autoFocus/> ?</p>
                    <div className='input-container__check'>
                        <span className='input-container__check--span'>Just</span>
                        <button className='input-container__check--btn'>Check it</button>
                    </div>
                </div>
                <CurrentWeather />
            </main>
        )
    }
}

export default Main