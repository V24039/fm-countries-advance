import { CountryDetails } from "../../types";

import "./Card.css";

interface ICardProps {
  countryDetail: CountryDetails;
}

const Card = ({ countryDetail }: ICardProps) => {
  return (
    <div className="element" onClick={() => console.log(countryDetail.area)}>
      <img
        alt={countryDetail.flag}
        src={countryDetail.flags.png}
        height="250px"
      />
      <div className="country_details">
        <h2 style={{ wordWrap: "break-word" }}>
          {countryDetail.name.official}
        </h2>
        <p>
          <span>Population:</span> <span>{countryDetail.population}</span>
        </p>
        <p>
          <span>Region:</span> <span>{countryDetail.region}</span>
        </p>
        <p>
          <span>Capital:</span> <span>{countryDetail.capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
