import { useState, useEffect } from "react";
import { Cards, SearchBar } from "../../components";
import { useAPI, useDebounce } from "../../hooks";

const HomePage = () => {
  const [countryName, setCountryName] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  const debouncedSearch = useDebounce(countryName, 500);

  const { data, error, fetchData, fetchRegion } = useAPI(countryName, region);

  const handleSearch = (value: string) => {
    setCountryName(value);
  };

  const handleRegion = (value: string) => {
    setRegion(value);
  };

  useEffect(() => {
    if (region) fetchRegion();
  }, [region]);

  useEffect(() => {
    if (debouncedSearch) fetchData(true);
    else fetchData(false);
  }, [debouncedSearch]);

  return (
    <>
      <SearchBar onSearch={handleSearch} handleRegion={handleRegion} />
      {error ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "40%",
            color: "red",
            fontSize: "20px",
            fontWeight: "600"
          }}
        >
          Something went wrong! Please try again
        </div>
      ) : (
        <Cards countryDetails={data} />
      )}
    </>
  );
};

export default HomePage;
