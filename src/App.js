import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SEO from "./components/SEO";
import SocialLinks from "./components/SocialLinks";
import Loading from "./components/ui/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula carregamento da aplicação
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <SEO />
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />

      <SocialLinks />
    </div>
  );
}

export default App;
