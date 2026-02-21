import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Problems from '../components/Problems';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Waitlist from '../components/Waitlist';
import Footer from '../components/Footer';

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Problems />
                <Features />
                <HowItWorks />
                <Pricing />
                <Waitlist />
            </main>
            <Footer />
        </>
    );
};

export default LandingPage;
