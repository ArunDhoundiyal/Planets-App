import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="bg-container">
      <h1 className="top-heading"> PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(planetsDetails => (
          <PlanetItem key={planetsDetails.id} planetsDetails={planetsDetails} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
