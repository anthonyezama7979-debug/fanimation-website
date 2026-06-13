
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Featured from "./component/Featured";
import About from "./component/About"
import Why from "./component/Why";
import Gallery from "./component/Gallery";
import Footer from "./component/Footer";



function App()
{
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Featured/>
            <About/>
            <Why/>
            <Gallery/>
            <Footer/>
        </div>
    )
}
export default App