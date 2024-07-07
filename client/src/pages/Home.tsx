import { Features } from "../components/HomeSections/Features"
import { Hero } from "../components/HomeSections/Hero"
import { Banner } from "../components/HomeSections/banner"
import { CallToAction } from "../components/HomeSections/callToAction"
import { Faq } from "../components/HomeSections/faq"
import { Footer } from "../components/HomeSections/footer"
import { HowItWorks } from "../components/HomeSections/howItWorks"
import { Header } from "../components/headers/Header"

export const Home:React.FC = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Features/>
            <Banner/>
            <HowItWorks/>
            <CallToAction/>
            <Faq/>
            <Footer/>
        </div>
    )
}