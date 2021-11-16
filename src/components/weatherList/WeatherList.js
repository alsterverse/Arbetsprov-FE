function WeatherList({ weather, onDeleteClick }) {
  return (
    <li key={weather.id}>
      {weather.text}
      <button onClick={() => onDeleteClick(weather.id)}>Delete</button>
    </li>
  )
}

export default WeatherList
