import { CountryDetails } from "../../types";
import Card from "./Card";
import "./Card.css";

interface ICardsProps {
  countryDetails: CountryDetails[];
}

export const Cards = ({ countryDetails }: ICardsProps) => {
  return (
    <div className="cards">
      {countryDetails?.map((country, index) => (
        <Card countryDetail={country} />
      ))}
    </div>
  );
};
