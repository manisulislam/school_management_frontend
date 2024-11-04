import HeroSection from "./components/HeroSection/HeroSection"
import Header from "./components/Header/Header"
import TrustedBySection from "./components/TrustedBySection/TrustedBySection"
import AboutUs from "./components/AboutUs/AboutUs"


function App() {
  

  return (
    <>
    <div className="w-full h-screen duration-300">
      <Header/>
      <HeroSection/>
      <TrustedBySection/>
      <AboutUs/>
    </div>
      
    </>
  )
}

export default App
