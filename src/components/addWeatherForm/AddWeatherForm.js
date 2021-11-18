import './addWeatherForm.scss'

function AddWeatherForm({ weather, onAddFormSubmit, onAddInputChange }) {
  return (
    <form onSubmit={onAddFormSubmit}>
      <h2>Hur är vädret i...</h2>
      <input
        name="weather"
        type="text"
        placeholder="Plats:"
        value={weather}
        onChange={onAddInputChange}
      />
    </form>
  )
}

export default AddWeatherForm
