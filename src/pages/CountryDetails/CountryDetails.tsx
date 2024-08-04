import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAPI } from "../../hooks";

const CountryDetails = () => {
  const { name } = useParams();

  const { data, fetchCountry } = useAPI(name || "");

  useEffect(() => {
    fetchCountry();
  }, [name]);

  return (
    <div>
      <img alt={data[0]?.flags?.alt} src={data[0]?.flags?.svg}/>
      <div>
        <h1>{name}</h1>
        <div>
          <p>
            <span>Native Name:</span>
            <span>
              {data[0] && Object.values(data[0]?.name?.nativeName)[0]?.common}
            </span>
          </p>
          <p>
            <span>Population:</span> <span>{data[0]?.population}</span>
          </p>
          <p>
            <span>Region:</span> <span>{data[0]?.region}</span>
          </p>
          <p>
            <span>Sub Region:</span> <span>{data[0]?.subregion}</span>
          </p>
          <p>
            <span>Capital:</span> <span>{data[0]?.capital}</span>
          </p>
        </div>
        <div>
          <p>
            <span>Top Level Domain:</span>
            <span> {data[0]?.tld}</span>
          </p>
          <p>
            <span>Currencies:</span>
            <span>
              {data[0] && Object.values(data[0]?.currencies)[0]?.name}
            </span>
          </p>
          <p>
            <span>Languages:</span>
            <span>
              {data[0] && Object.values(data[0]?.languages).join(", ")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
