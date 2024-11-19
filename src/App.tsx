import Cards from "./module/cards";
import Features from "./module/features";
import Hero from "./module/Hero";
import Navbar from "./module/Navbar";
import NewsLetter from "./module/NewsLetter";


function App() {
  return(
    <div>
      <Navbar />
      <Hero />
      <Features />
      <NewsLetter />
      <Cards />
    </div>
  )
}

export default App;