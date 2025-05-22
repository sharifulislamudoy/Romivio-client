import { useEffect, useState } from 'react';

const CarouselBanner = () => {
    const slides = [
        {
            id: "item1",
            src: "https://i.ibb.co/8SDz608/Untitled-design-59.png",
            alt: "Slide 1"
        },
        {
            id: "item2",
            src: "https://i.ibb.co/0pNHkSx1/Untitled-design-60.png",
            alt: "Slide 2"
        },
        {
            id: "item3",
            src: "https://i.ibb.co/WpdSXHND/Untitled-design-63.png",
            alt: "Slide 3"
        },
        {
            id: "item4",
            src: "https://i.ibb.co/mVTZ5C1p/Untitled-design-62.png",
            alt: "Slide 4"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div>
            <div className="carousel w-full">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`carousel-item w-full ${index === currentSlide ? '' : 'hidden'}`}
                    >
                        <img src={slide.src} alt={slide.alt} className="w-full" />
                    </div>
                ))}
            </div>

            <div className="flex w-full justify-center gap-2 py-2">
                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        onClick={() => setCurrentSlide(index)}
                        className={`btn btn-xs ${index === currentSlide ? 'btn-primary' : ''}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CarouselBanner;
