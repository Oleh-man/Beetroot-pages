import { Link } from "react-router-dom";

const CurrentWeather = (props) => {
    return (
        <>
            <div className="weather-container">
                <div className="weather-container__icon">
                    <img src={props.data && "http://openweathermap.org/img/wn/" + props.data.weather[0].icon + "@4x.png"} alt="" />
                </div>
                <div className="weather-container__main-temp">
                    <div className="weather-container__main-temp--big">{props.data && props.toggleSystem(props.data.main.temp)}</div>
                    <div className="weather-container__main-temp--small">{props.data && props.toggleSystem(props.data.main.temp_min)}/{props.data && props.toggleSystem(props.data.main.temp_max)}</div>
                </div>
                <div className="weather-container__info">
                    <div className="weather-container__info__icons">
                        <div>icon</div>
                        <div>icon</div>
                        <div>icon</div>
                    </div>
                    <div className="weather-container__info__dem">
                        <div>2kmh</div>
                        <div>70%</div>
                        <div>30%</div>
                    </div>
                </div>
            </div>
            <Link to='/comparison'><button className="input-container__check--btn">Compare</button></Link>
            {/* <button>Compare</button> */}
        </>
    );
};

export default CurrentWeather;