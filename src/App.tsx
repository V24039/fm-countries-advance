import { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CountryDetailsPage, HomePage } from "./pages";

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

  return (
    <AppContext.Provider value={{ loading, setLoading }}>
      <div className="App">
        {loading && (
          <div className="spinnerBody">
            <div className="spinner" />
          </div>
        )}
        <nav>Where in the world</nav>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:name" element={<CountryDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
