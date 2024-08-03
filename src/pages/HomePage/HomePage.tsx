import { useState, useEffect } from "react";
import { Cards, SearchBar } from "../../components";
import useDebounce from "../../hooks/useDebounce";
import { CountryDetails } from "../../types";

const HomePage = () => {
  const [countryName, setCountryName] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [data, setData] = useState<CountryDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const urlAll = `https://restcountries.com/v3.1/all`;
  const urlRegion = `https://restcountries.com/v3.1/region/${region}`;

  const debouncedSearch = useDebounce(countryName, 500);

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

  const fetchData = async (isFilter: boolean) => {
    setLoading(true);
    const url = isFilter
      ? `https://restcountries.com/v3.1/name/${debouncedSearch}`
      : urlAll;

    const response = await fetch(url);
    const responseData = await response.json();
    let filteredData;
    if (region) {
      filteredData = responseData.filter(
        (value: CountryDetails) => value.region === region
      );
    }
    setData(filteredData || responseData);
    setLoading(false);
  };

  const fetchRegion = async () => {
    setLoading(true);
    const response = await fetch(urlRegion);
    const responseData = await response.json();
    setData(responseData);
    setLoading(false);
  };
  return (
    <>
      <SearchBar onSearch={handleSearch} handleRegion={handleRegion} />
      <Cards countryDetails={data} />
    </>
  );
};

export default HomePage;
