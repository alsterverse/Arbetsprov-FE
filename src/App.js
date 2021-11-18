import { useEffect, useState } from 'react'
import Footer from './components/footer/Footer'
import WeatherList from './components/weatherList/WeatherList'
import AddWeatherForm from './components/addWeatherForm/AddWeatherForm'
import './app.scss'

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      return JSON.parse(savedTodos)
    } else {
      return []
    }
  })
  const [weather, setWeather] = useState('')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function handleAddInputChange(e) {
    setWeather(e.target.value)
  }

  function handleAddFormSubmit(e) {
    e.preventDefault()

    if (weather !== '') {
      setTodos([
        ...todos,
        {
          id: new Date(),
          text: weather.trim(),
        },
      ])
    }

    setWeather('')
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((weather) => {
      return weather.id !== id
    })
    setTodos(removeItem)
  }

  return (
    <>
      <div className="weather-container">
        <AddWeatherForm
          weather={weather}
          onAddInputChange={handleAddInputChange}
          onAddFormSubmit={handleAddFormSubmit}
        />

        <ul className="weather-list">
          {todos.map((weather) => (
            <WeatherList
              key={weather.id}
              weather={weather}
              onDeleteClick={handleDeleteClick}
            />
          ))}
        </ul>
      </div>
      <Footer />
    </>
  )
}

export default App
