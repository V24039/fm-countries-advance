import { useState, useEffect } from "react";
import { Cards, SearchBar } from "../../components";
import { useAPI, useDebounce } from "../../hooks";

const HomePage = () => {
  const [countryName, setCountryName] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  const debouncedSearch = useDebounce(countryName, 500);

  const { data, fetchData, fetchRegion } = useAPI(countryName, region);

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
      <Cards countryDetails={data} />
    </>
  );
};

export default HomePage;
