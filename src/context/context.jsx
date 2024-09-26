import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [testimony, setTestimony] = useState([]);
  const [results, setResults] = useState([]);
  const [coaches, setCoaches] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const url = "https://bms-website-backend-qkbt.onrender.com";

  const fetchTestimony = async () => {
    const res = await axios.get(url + "/api/testimony/list");
    setTestimony(res.data.data);
  };

  const fetchResults = async () => {
    const res = await axios.get(url + "/api/results/list");

    setResults(res.data.data);
  };

  const fetchCoaches = async () => {
    const res = await axios.get(url + "/api/coach/team");
    setCoaches(res.data.data);
  };

  const fetchRecipes = async () => {
    const res = await axios.get(url + "/api/health-recipe");
    setRecipes(res.data.data);
  };

  useEffect(() => {
    fetchTestimony();
    fetchResults();
    fetchCoaches();
    fetchRecipes();
  }, []);

  const contextValue = {
    url,
    testimony,
    results,
    coaches,
    recipes,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
