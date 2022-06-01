import React from 'react'
import CurrentWeather from '../components/CurrentWeather'
import SwitchSystem from '../components/SwitchSystem'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            weatherData: null,
            metric: true
        };
    };

    changeInputSize = (e) => {
        this.setState((oldState) => {
            return {
                ...oldState,
                city: e.target.value
            };
        });

        switch (e.target.value.length) {
            case 1:
                e.target.style.width = `${e.target.value.length + 1}ch`;
                break;
            case 2:
                e.target.style.width = `${e.target.value.length + 2}ch`;
                break;
            case 0:
                e.target.style.width = `9.5ch`;
                break;

            default:
                e.target.style.width = `${e.target.value.length + 1}ch`
                break;
        };
    };

    checkWeather = () => {
        if (this.state.city !== '') {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=21edd3c2f4e30b2f7d738b8251326cc5&units=metric`)
                .then(res => res.json())
                .then(data => {
                    this.setState((oldState) => {
                        return {
                            ...oldState,
                            weatherData: data
                        };
                    });
                });
        };
    };

    changeTempSystem = () => {
        this.setState((oldState) => {
            return {
                ...oldState,
                metric: !oldState.metric
            };
        });
    };

    toggleSystem = (temp) => {
        if (this.state.metric === false) {
            return Math.floor((temp * 1.8) + 32);
        } else {
            return Math.floor(temp);
        };
    };

    render() {

        console.log(this.state.weatherData)

        return (
            <main className="wrapper">
                <h1>Weather Checker</h1>
                <div className='input-container'>
                    <p className='input-container__question'>
                        Want to know Weather in
                        <input
                            onChange={this.changeInputSize}
                            className='city-name'
                            type="text"
                            placeholder='(your place)'
                            autoFocus /> ?</p>
                    <div className='input-container__check'>
                        <span className='input-container__check--span'>Just</span>
                        <button
                            className='input-container__check--btn'
                            onClick={this.checkWeather}>
                            Check it</button>
                    </div>
                </div>
                {this.state.weatherData === null && <div className=''>Please enter city name and hit "Check it" button</div>}
                {<CurrentWeather
                    data={this.state.weatherData}
                    ifMetric={this.state.metric}
                    changeSystem={this.changeSystem}
                    toggleSystem={this.toggleSystem} />}
                {/* {this.state.weatherData && <CurrentWeather data={this.state.weatherData} ifMetric={this.state.metric}/>} */}
                <SwitchSystem changeTempSystem={this.changeTempSystem} />
            </main>
        )
    }
}

export default Main