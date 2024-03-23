import './index.css'

const PlanetItem = props => {
  const {planetsDetails} = props
  const {name, imageUrl, description} = planetsDetails
  return (
    <div className="eachPlanetDetailsContainer" data-testid="planets">
      <img className="image" src={imageUrl} alt={`planet ${name}`} />
      <h1 className="planetName">{name}</h1>
      <p className="planetDescription">{description}</p>
    </div>
  )
}

export default PlanetItem
