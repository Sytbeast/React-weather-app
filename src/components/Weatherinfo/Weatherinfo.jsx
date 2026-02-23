import React from 'react'

const Weatherinfo = ({ data }) => {

    const getImages = () => {
        if (!data) return "clear-day.svg";

        const icon = data.weather[0].icon;

        switch (icon) {
            case "01d":
                return "clear-day.svg";
            case "01n":
                return "clear-night.svg";

            case "02d":
                return "partly-cloudy-day.svg";
            case "02n":
                return "partly-cloudy-night.svg";

            case "03d":
            case "03n":
            case "04d":
            case "04n":
                return "overcast.svg";

            case "09d":
            case "09n":
            case "10d":
            case "10n":
                return "rain.svg";

            case "11d":
            case "11n":
                return "thunderstorms.svg";

            case "13d":
            case "13n":
                return "snow.svg";

            case "50d":
            case "50n":
                return "mist.svg";

            default:
                return "clear-day.svg";
        }
    }

    return (

        <div className='w-full text-white bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400 p-2 rounded-2xl md:flex justify-between mb-5 '>
            <div className='md:w-[50%] flex flex-col justify-center items-center 
            gap-2'>
                <div className='text-3xl font-bold font-mono'>Current Weather</div>
                <img width={200} src={getImages()} alt="" />
                <div className='font-bold text-xl font-mono'>{data?.weather[0].main}</div>
            </div>

            <div className='rounded-xl p-2 md:w-[50%] shadow-2xl bg-[#eeeded] text-black'>
                <div className='text-3xl font-bold text-center font-mono py-3 text-gray-600'>
                    Weather Details
                </div>

                <div className='flex justify-between text-xs md:text-lg md:px-20 px-5 font-semibold font-mono text-gray-500'>
                    <div className=''>
                        <div>Lon: {data?.coord.lon}°</div>
                        <div>Temp: {data?.main.temp}°C</div>
                        <div>TempMax: {data?.main.temp_max}°C</div>
                        <div>TempMin: {data?.main.temp_min}°C</div>
                        <div>Pressure: {data?.main.pressure}hPa</div>
                    </div>

                    <div>
                        <div>Lat: {data?.coord.lat}°</div>
                        <div>FeelsLike: {data?.main.feels_like}°C</div>
                        <div>Humidity: {data?.main.humidity}%</div>
                        <div>Sea Level: {data?.main.sea_level}hPa</div>
                        <div>Ground level: {data?.main.grnd_level}hPa</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Weatherinfo

