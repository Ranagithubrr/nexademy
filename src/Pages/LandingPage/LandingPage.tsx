import React from 'react'
import NavbarWithMegaMenu from '../../Components/Navbar/Navbar'
import Herosection from '../../Components/HeroSection/Herosection'
import FeaturedCourse from '../../Components/FeaturedCourse/FeaturedCourse'
import LatestRelease from '../../Components/LatestRelease/LatestRelease'
import TakeNextStep from '../../Components/TakeNextStep/TakeNextStep'
import Footer from '../../Components/Footer/Footer'

const LandingPage = () => {
    return (
        <>
            <div className="max-w-screen-xl mx-auto">
                <NavbarWithMegaMenu Dashboard={false}/>
                <Herosection />
                <FeaturedCourse />
                <LatestRelease />
                <TakeNextStep />
            </div>
            <Footer />
        </>
    )
}

export default LandingPage