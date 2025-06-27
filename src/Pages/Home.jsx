
import { useEffect, useState } from 'react';
import FeaturedRoommates from '../Components/FeaturedRoommates';
import HowItWorks from '../Components/HowItWorks';
import LoadingSpinner from '../Components/LoadingSpinner';
import Testimonials from '../Components/Testimonials';
import WhyChooseUs from '../Components/WhyChooseUs';
import { useLocation } from 'react-router-dom';
import CarouselBanner from '../Components/CarouselBanner';
import CallToActionSection from '../Components/CallToActionSection';
import OurUsers from '../Components/OurUsers';
import TopLocations from '../Components/TopLocations';
import MyComponent from '../Components/Hook';

const Home = () => {
    MyComponent();
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
        <div className='w-11/12 mx-auto'>
            <CarouselBanner></CarouselBanner>
            <FeaturedRoommates></FeaturedRoommates>
            <CallToActionSection></CallToActionSection>
            <OurUsers></OurUsers>
            <TopLocations></TopLocations>
            <Testimonials></Testimonials>
            <WhyChooseUs></WhyChooseUs>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;