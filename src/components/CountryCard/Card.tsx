import { useNavigate } from "react-router-dom";
import { CountryDetails } from "../../types";

import "./Card.css";

interface ICardProps {
  countryDetail: CountryDetails;
}

const Card = ({ countryDetail }: ICardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="element"
      onClick={() => navigate(`/country/${countryDetail?.name?.official}`)}
    >
      <img
        alt={countryDetail?.flags.alt}
        src={countryDetail?.flags.png}
      />
      <div className="country_details">
        <h2 style={{ wordWrap: "break-word" }}>
          {countryDetail?.name?.official}
        </h2>
        <p>
          <span>Population:</span> <span>{countryDetail?.population}</span>
        </p>
        <p>
          <span>Region:</span> <span>{countryDetail?.region}</span>
        </p>
        <p>
          <span>Capital:</span> <span>{countryDetail?.capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
