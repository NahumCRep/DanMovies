import '../styles/slider.css';
import avengers from '../assets/imagenes/avengers.jpg';
import harry from '../assets/imagenes/harrypotter2.jpg';
import spiderman from '../assets/imagenes/spiderman.jpg';
import SliderBanner from './SliderBanner';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const Slider = () => {
    return (
        <div className="slider">
            <div className='slider__banners'>
                <SliderBanner title={'Avengers EndGame'} banner={avengers} />
                <SliderBanner title={'spiderman'} banner={spiderman} />
                <SliderBanner title={'Harry Potter Deadly Hollows 2'} banner={harry} />
            </div>
            <div className='slider__controls'>
                <button className='slider__button'>
                    <MdArrowBackIos size={40} />
                </button>
                <span>{`${1} / 4`}</span>
                <button className='slider__button'>
                    <MdArrowForwardIos size={40} />
                </button>
            </div>
        </div>
    )
}

export default Slider;