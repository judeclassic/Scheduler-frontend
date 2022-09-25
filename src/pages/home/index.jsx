import { ContactUs, FAQ, Footer, Header, HowTo, Navbar, Pricing } from '../../components/home';

const HomePage = () => {
    return (
        <div className="leading-normal tracking-normal text-white gradient" style={{fontFamily: 'Source Sans Pro, sans-serif'}}>
            <Navbar/>
            <Header/>
            <HowTo/>
            <FAQ/>
            <Pricing/>
            <ContactUs/>
            <Footer/>
        </div>
    )
}

export default HomePage;  