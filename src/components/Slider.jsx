import { useState, useRef, useEffect} from 'react';
import '../styles/slider.css';
import avengers from '../assets/imagenes/avengers.jpg';
import harry from '../assets/imagenes/harrypotter2.jpg';
import spiderman from '../assets/imagenes/spiderman.jpg';
import dune from '../assets/imagenes/dune.jpg';
import SliderBanner from './SliderBanner';
import { MdArrowForwardIos, MdOutlineArrowBackIosNew } from 'react-icons/md';

const Slider = () => {
    const slider = useRef(null);
    const [sliderLength, setSliderLength] = useState(0);
    const [currentSlider, setCurrentSlider] = useState(1);

    useEffect(()=>{
        let sliderAmount = slider.current.children.length;
        setSliderLength(sliderAmount);
    },[]);

    const sliderNext = () => {
        if(sliderLength > 0){
            currentSlider >= sliderLength 
            ? setCurrentSlider(1) 
            : setCurrentSlider(currentSlider + 1); 
            // console.log(slider.current.children);
            // const firstSlide = slider.current.children[0];
            // const slideLength = slider.current.children[0].offsetWidth;
            // slider.current.style.transition = `500ms ease-out all`;
            // slider.current.style.transform = `translateX(-${slideLength}px)`;
            // slider.current.style.transform = `translateX(-100%)`;
        }
    }

    const sliderPrev = () => {
        if(slider.current.children.length > 0){
            currentSlider <= 1 
            ? setCurrentSlider(sliderLength) 
            : setCurrentSlider(currentSlider - 1);
            // console.log(slider.current.children);
            // const firstSlide = slider.current.children[0];
            // const slideLength = slider.current.children[0].offsetWidth;
            // slider.current.style.transition = `300ms ease-out all`;
            // slider.current.style.transform = `translateX(${slideLength}px)`;
            // slider.current.style.transform = `translateX(0px)`;
        }
    }

    return (
        <div className="slider">
            <div ref={slider} className='slider__banners'>
                <SliderBanner title={'Avengers EndGame'} banner={avengers} />
                <SliderBanner title={'spiderman'} banner={spiderman} />
                <SliderBanner title={'Harry Potter Deadly Hollows 2'} banner={harry} />
                <SliderBanner title={'Dune'} banner={dune} />
            </div>
            <div className='slider__controls'>
                <button 
                    className='slider__button slider__button-left'
                    onClick={sliderPrev}
                >
                    <MdOutlineArrowBackIosNew size={26} />
                </button>
                <span>{`${currentSlider} / ${sliderLength}`}</span>
                <button 
                    className='slider__button slider__button-right'
                    onClick={sliderNext}
                >
                    <MdArrowForwardIos size={26} />
                </button>
            </div>
        </div>
    )
}

export default Slider;