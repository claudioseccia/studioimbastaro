import { useEffect } from "react";
import { createContext, useState } from "react";

export const StateContext = createContext();

/* eslint-disable */
const StateProvider = ({ children }) => {
  /* eslint-enable */
  const [navbarOver, setNavbarOver] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [changeTitle, setChangeTitle] = useState(false);
  const [projectsData, setProjectsData] = useState(null);

  const REACT_APP_API_URL = import.meta.env.VITE_REACT_APP_API_URL;
  // const apiUrl = new URL("data/projectsData.json", REACT_APP_API_URL).href;
  // console.log(apiUrl);
  useEffect(() => {
    // Fetch JSON data from public folder
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${REACT_APP_API_URL}/data/projectsData.json`
        );
        // const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Network response was not ok");
        const jsonData = await response.json();
        setProjectsData(jsonData);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchData();
  }, [REACT_APP_API_URL]);

  return (
    <StateContext.Provider
      value={{
        projectsData,
        navbarOver,
        setNavbarOver,
        showCart,
        setShowCart,
        cart,
        setCart,
        changeTitle,
        setChangeTitle,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
