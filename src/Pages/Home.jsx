
import Banner from '../Components/Banner';
import FeaturedRoommates from '../Components/FeaturedRoommates';
import HowItWorks from '../Components/HowItWorks';
import Testimonials from '../Components/Testimonials';
import WhyChooseUs from '../Components/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedRoommates></FeaturedRoommates>
            <Testimonials></Testimonials>
            <WhyChooseUs></WhyChooseUs>
            <HowItWorks></HowItWorks>
            
        </div>
    );
};

export default Home;