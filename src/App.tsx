import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CiDark, CiLight } from "react-icons/ci";

import { CountryDetailsPage, HomePage } from "./pages";

import "./App.css";

export interface AppContextType {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const AppContext = createContext<AppContextType>({
  loading: false,
  setLoading: () => {},
});

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [currentTheme, setCurrentTheme] = useState<boolean>(false);

  const handleThemeChange = () => {
    setCurrentTheme((prev) => !prev);
    document.documentElement.classList.toggle("dark", !currentTheme);
    document.documentElement.classList.toggle("light", currentTheme);
  };

  return (
    <AppContext.Provider value={{ loading, setLoading }}>
      <div className="App">
        {loading && (
          <div className="spinnerBody">
            <div className="spinner" />
          </div>
        )}
        <nav>
          Where in the world
          <div className="theme" onClick={handleThemeChange}>
            {currentTheme ? (
              <>
                <CiDark size={30} /> Dark Mode
              </>
            ) : (
              <>
                <CiLight size={30} /> Light Mode
              </>
            )}
          </div>
        </nav>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/country/:name" element={<CountryDetailsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}

export default App;
