import CraftItems from "../Components/CraftItems/CraftItems";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Slider from "../Components/Slider/Slider";


const Home = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <CraftItems />
            <Footer />
        </div>
    );
};

export default Home;