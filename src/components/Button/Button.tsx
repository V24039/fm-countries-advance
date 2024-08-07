import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";

export const Button = ({ value = "" }) => {
  const [name, setName] = useState<string>("");
  const { setLoading } = useContext(AppContext);
  const navigate = useNavigate();
  const url = `/country/${name}`;

  useEffect(() => {
    getCountryName(value);
  }, [value]);

  const getCountryName = async (cca3: string) => {
    setLoading(true);
    let responseData: string = "";
    await fetch(`https://restcountries.com/v3.1/alpha/${value}?fields=name`)
      .then((res) => res.json())
      .then((res) => (responseData = res?.name?.common));
    setName(responseData || cca3);
    setLoading(false);
  };

  return (
    <button key={`border_${value}`} onClick={() => navigate(url)}>
      {name}
    </button>
  );
};
