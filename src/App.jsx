import "./index.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Results from "./Components/Results/Results";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Recipes from "./Components/Recipes/Recipes";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import RecipeDetail from "./Components/Recipes/RecipeDetail/RecipeDetail";

function App() {
  return (
    <>
      <div className="app">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
