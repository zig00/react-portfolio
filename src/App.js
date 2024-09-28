import Header from "./components/header"
import Welcome from "./components/welcome"
import Skills from "./components/skills"
import About from "./components/aboutme"
import Portfolio from "./components/portfolio"
import Footer from "./components/footer"
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/plus-jakarta-sans"; // Defaults to weight 400
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="welcome" element={<Welcome />} />
            <Route path="skills" element={<Skills />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
       <Header />
      <Welcome />
      <Skills />
      <About />
      <Portfolio />
      <Footer/>
    </div>
  );
}

export default App;
