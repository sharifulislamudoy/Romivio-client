import { useEffect, useState } from 'react';

import BgImg from '../assets/Bg.png'


const slides = [
    {
        id: 1,
        title: "Find the Perfect Roommate",
        desc: "Roomivio helps you connect with people who match your lifestyle, budget, and vibe.",
        buttonText: "Browse Listings",
        link: "/browse",
    },
    {
        id: 2,
        title: "Post Your Listing with Ease",
        desc: "Looking for a roommate? Add your listing and let others find you!",
        buttonText: "Add Listing",
        link: "/add-roommate",
    },
    {
        id: 3,
        title: "Secure & Verified Profiles",
        desc: "We prioritize your safety with verified user accounts and transparent listings.",
        buttonText: "Join Roomivio",
        link: "/signup",
    },
];

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="w-full min-h-screen relative overflow-hidden mt-20 bg-center bg-cover"
            style={{ backgroundImage: `url(${BgImg})` }}
        >
             <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-black/60"></div>
            <div>
                {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center text-center text-white px-6">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                            <p className="text-lg mb-6">{slide.desc}</p>
                            <a href={slide.link} className="btn btn-primary">{slide.buttonText}</a>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Banner;
