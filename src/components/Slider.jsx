import { useState, useRef, useEffect } from 'react';
import '../styles/slider.css';
import avengers from '../assets/imagenes/avengers.jpg';
import harry from '../assets/imagenes/harrypotter2.jpg';
import spiderman from '../assets/imagenes/spiderman.jpg';
import dune from '../assets/imagenes/dune.jpg';
import SliderBanner from './SliderBanner';
import { MdArrowForwardIos, MdOutlineArrowBackIosNew } from 'react-icons/md';

const moviesMockup = [
    {
        id: '1',
        title: 'Avengers EndGame',
        banner: avengers
    },
    {
        id: '2',
        title: 'Spiderman No Way Home',
        banner: spiderman
    },
    {
        id: '3',
        title: 'Harry Potter Reliquias del Muerte Parte 2',
        banner: harry
    },
    {
        id: '4',
        title: 'Dune',
        banner: dune
    },
]

const Slider = () => {
    const slider = useRef(null);
    const [sliderLength, setSliderLength] = useState(0);
    const [currentSlider, setCurrentSlider] = useState(1);

    useEffect(() => {
        let sliderAmount = slider.current.children.length;
        setSliderLength(sliderAmount);
        // setSliderLength(moviesMockup.length);
    }, []);

    const sliderNext = () => {

        // currentSlider >= sliderLength
        //     ? setCurrentSlider(1)
        //     : setCurrentSlider(currentSlider + 1);

        if (sliderLength > 0) {
            currentSlider >= sliderLength
                ? setCurrentSlider(1)
                : setCurrentSlider(currentSlider + 1);

            // con animacion de slider ..................................   
            const firstSlide = slider.current.children[0];
            const slideLength = slider.current.children[0].offsetWidth;
            slider.current.style.transition = `500ms ease-out all`;
            slider.current.style.transform = `translateX(-${slideLength}px)`;

            const stopTransition = () => {
                slider.current.style.transition = 'none';
                slider.current.style.transform = 'translateX(0px)';
                slider.current.appendChild(firstSlide);

                slider.current.removeEventListener('transitionend', stopTransition);
            }

            slider.current.addEventListener('transitionend', stopTransition);

        }
    }

    const sliderPrev = () => {

        // currentSlider <= 1
        //         ? setCurrentSlider(sliderLength)
        //         : setCurrentSlider(currentSlider - 1);

        if (slider.current.children.length > 0) {
            currentSlider <= 1
                ? setCurrentSlider(sliderLength)
                : setCurrentSlider(currentSlider - 1);

            const index = slider.current.children.length - 1;
            const lastSlide = slider.current.children[index];
            slider.current.insertBefore(lastSlide, slider.current.firstChild);

            slider.current.style.transition = 'none';
            const slideLength = slider.current.children[0].offsetWidth;
            slider.current.style.transform = `translateX(-${slideLength}px)`;

            setTimeout(() => {
                slider.current.style.transition = `500ms ease-out all`;
                slider.current.style.transform = `translateX(0px)`;
            }, 30);
        }
    }

    return (
        <div className="slider">
            <div ref={slider} className='slider__banners'>
                <SliderBanner title={'Avengers EndGame'} banner={avengers} />
                <SliderBanner title={'spiderman'} banner={spiderman} />
                <SliderBanner title={'Harry Potter Deadly Hollows 2'} banner={harry} />
                <SliderBanner title={'Dune'} banner={dune} />
                {/* <SliderBanner title={moviesMockup[currentSlider - 1].title} banner={moviesMockup[currentSlider - 1].banner} /> */}
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