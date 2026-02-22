import React, { useEffect, useState } from 'react'
import Weatherinfo from './components/Weatherinfo/Weatherinfo'
import Card from './components/Card/Card'
import Searchbar from './components/SearchBar/Searchbar'

const App = () => {

  const [city, setCity] = useState('Raigarh')
  const [data, setData] = useState(null);
  const [error , setError] = useState('')

  useEffect(() => {
    if (!city) return;
    const getWeather = async () => {

      setError("")

      try {
        const apiKey = '6c4026b7cd694e3f68b0a6ca7e35a73a'

        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

        const value = await res.json();

        if(!res.ok){
          setError(value.message)
          setData(null)
          return;
        }
        setData(value)
      } catch (error) {
        console.log("something went wrong")
      }

    }
    getWeather();

  }, [city])


  return (
    <div className='min-h-screen w-screen overflow-x-hidden p-1'>
      <Weatherinfo data={data} error={error} />

      {error &&<div className='rounded font-bold capitalize px-4 py-2 text-red-500 text-center bg-red-200 mb-3'>{error}</div>}

      <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-5'>
        <Card
          title={"Wind"}
          slot1={"Speed"}
          val1={`${(data?.wind?.speed * 3.6).toFixed(1)} km/h`}
          slot2={"Deg"}
          val2={data?.wind.deg + "°"}
          slot3={"Gust"}
          val3={data?.wind?.gust ? (data.wind.gust * 3.6).toFixed(1) + " km/h" : "N/A"}
        />

        <Card
          title={"Country Info"}
          slot1={"Country Code"}
          val1={data?.sys.country}
          slot2={"Sunrise"}
          val2={`${new Date(data?.sys?.sunrise * 1000).toLocaleTimeString()}`}
          slot3={"Sunset"}
          val3={`${new Date(data?.sys?.sunset * 1000).toLocaleTimeString()}`}
        />
        <Card
          title={"Visibility"}
          slot1={"visibiliy"}
          val1={`${data?.visibility / 1000} km`}
        />
        <Card
          title={"TimeZone"}
          slot1={"TimeZone"}
          val1={`UTC +${(data?.timezone / 3600).toFixed(1)}`}
          slot2={"City Name"}
          val2={`${data?.name}`}

        />
      </div>

      <Searchbar setCity={setCity} />

    </div>
  )
}

export default App
