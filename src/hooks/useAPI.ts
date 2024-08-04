import { useContext, useState } from "react";
import { CountryDetails } from "../types";
import { AppContext } from "../App";

const urlAll = `https://restcountries.com/v3.1/all`;
const urlRegion = `https://restcountries.com/v3.1/region/`;

export const useAPI = (name: string, region?: string) => {
  const { setLoading } = useContext(AppContext);
  const [data, setData] = useState<CountryDetails[]>([]);

  const fetchData = async (isFilter: boolean) => {
    setLoading(true);
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
    setLoading(false);
    setData(filteredData || responseData);
  };

  const fetchRegion = async () => {
    setLoading(true);
    const response = await fetch(`${urlRegion}/${region}`);
    const responseData = await response.json();
    setLoading(false);
    setData(responseData);
  };

  const fetchCountry = async () => {
    console.log("in fetchcountry")
    setLoading(true);
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`
    );
    const responseData = await response.json();
    setLoading(false);
    setData(responseData);
  };

  return {
    data,
    fetchRegion,
    fetchCountry,
    fetchData,
  };
};
