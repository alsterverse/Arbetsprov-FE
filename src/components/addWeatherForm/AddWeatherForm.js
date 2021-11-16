function AddWeatherForm({ weather, onAddFormSubmit, onAddInputChange }) {
  return (
    <form onSubmit={onAddFormSubmit}>
      <input
        name="weather"
        type="text"
        placeholder="Plats.."
        value={weather}
        onChange={onAddInputChange}
      />
    </form>
  )
}

export default AddWeatherForm
