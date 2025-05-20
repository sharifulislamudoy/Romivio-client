
import { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import FeaturedRoommates from '../Components/FeaturedRoommates';
import HowItWorks from '../Components/HowItWorks';
import LoadingSpinner from '../Components/LoadingSpinner';
import Testimonials from '../Components/Testimonials';
import WhyChooseUs from '../Components/WhyChooseUs';
import { useLocation } from 'react-router-dom';
import IntroTypingSection from '../Components/IntroTypingSection';
import CarouselBanner from '../Components/CarouselBanner';

const Home = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timeOut = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timeOut);
    }, [location.pathname]);

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div>
            <div className='min-h-screen flex justify-center items-center flex-col gap-8'>
                <IntroTypingSection></IntroTypingSection>
                <CarouselBanner></CarouselBanner>
            </div>
            <Banner></Banner>
            <FeaturedRoommates></FeaturedRoommates>
            <Testimonials></Testimonials>
            <WhyChooseUs></WhyChooseUs>
            <HowItWorks></HowItWorks>

        </div>
    );
};

export default Home;