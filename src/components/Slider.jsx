import '../styles/slider.css';
import avengers from '../assets/imagenes/avengers.jpg';

const Slider = () => {
    return (
        <div className="slider">
            <div className='slider__bg-gradient'>
                <div className="slider__title">
                    <h1>Avengers End Game</h1>
                    <button>Ver</button>
                </div>
            </div>
            <div className="slider__banner">
                <img src={avengers} className="slider__img" alt="banner" />
            </div>
        </div>
    )
}

export default Slider;