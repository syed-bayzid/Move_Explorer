import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="min-h-screen bg-black">
            <Navbar />

            <main>
                <HeroBanner />
            </main>

            <Footer />
        </div>
    );
};

export default Home;