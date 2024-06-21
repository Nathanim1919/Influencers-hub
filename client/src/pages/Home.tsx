import { Features } from "../components/HomeSections/Features"
import { Hero } from "../components/HomeSections/Hero"
import { Header } from "../components/headers/Header"

export const Home:React.FC = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Features/>
        </div>
    )
}