import { useContext, useState } from "react";
import { CountryDetails } from "../types";
import { AppContext } from "../App";

const urlAll = `https://restcountries.com/v3.1/all`;
const urlRegion = `https://restcountries.com/v3.1/region/`;

export const useAPI = (name: string, region?: string) => {
  const { setLoading } = useContext(AppContext);
  const [data, setData] = useState<CountryDetails[]>([]);
  const [error, setError] = useState<boolean>(false);

  const fetchData = async (isFilter: boolean) => {
    setLoading(true);
    setError(false);
    try {
      const url = isFilter
        ? `https://restcountries.com/v3.1/name/${name}`
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
    } catch {
      setError(true);
    }
    setLoading(false);
  };

  const fetchRegion = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(`${urlRegion}/${region}`);
      const responseData = await response.json();
      setData(responseData);
    } catch {
      setError(true);
    }
    setLoading(false);
  };

  const fetchCountry = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}?fullText=true`
      );
      const responseData = await response.json();
      setData(responseData);
    } catch {
      setError(true);
    }
    setLoading(false);
  };

  return {
    data,
    error,
    fetchRegion,
    fetchCountry,
    fetchData,
  };
};
