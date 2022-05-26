const CurrentWeather = () => {
    return (
        <div className="weather-container">
            <div className="weather-container__icon">soon</div>
            <div className="weather-container__temp">
                <span>102</span>
                <div>
                    <span>80</span>
                    <span>/</span>
                    <span>120</span>
                </div>
            </div>
            <div className="weather-container__info">
                <div>
                    <span>icon</span>
                    <span>5<span>km/h</span></span>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather