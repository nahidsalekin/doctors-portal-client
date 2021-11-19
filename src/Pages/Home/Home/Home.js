import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import ContactFormBanner from '../ContactFormBanner/ContactFormBanner';
import DentalCareBanner from '../DentalCareBanner/DentalCareBanner';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner></Banner>
            <Services></Services>
            <DentalCareBanner />
            <AppointmentBanner></AppointmentBanner>
            <Doctors />
            <ContactFormBanner></ContactFormBanner>
            <Footer></Footer>
        </div>
    );
};

export default Home;