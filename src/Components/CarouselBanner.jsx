import { useEffect, useState } from 'react';

const CarouselBanner = () => {
    const slides = [
        {
            id: "item1",
            src: "https://i.ibb.co/WRGMJkC/Blue-Purple-Modern-Minimalist-Dream-House-For-Sale-Banner.png",
            alt: "Slide 1"
        },
        {
            id: "item2",
            src: "https://i.ibb.co/wZCVjK9q/Find.png",
            alt: "Slide 2"
        },
        {
            id: "item3",
            src: "https://i.ibb.co/bpLV4Ry/YOur-Best-Choice.png",
            alt: "Slide 3"
        },
        {
            id: "item4",
            src: "https://i.ibb.co/DcW592K/880-1995-322033.png",
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
        <div className="h-full overflow-hidden object-top">
            <div className="carousel w-full">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`carousel-item w-full h-full ${index === currentSlide ? '' : 'hidden'}`}
                    >
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarouselBanner;
