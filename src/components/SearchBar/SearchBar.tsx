import { useState } from "react";
import "./SearchBar.css";

interface ISearchBarProps {
  onSearch: (searchTerm: string) => void;
  handleRegion: (region: string) => void;
}

export const SearchBar = ({ onSearch, handleRegion }: ISearchBarProps) => {
  const [country, setCountryName] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  return (
    <div className="search_bar">
      <input
        placeholder="Search for a country..."
        name="country"
        value={country}
        onChange={(event) => {
          onSearch(event.target.value)
          setCountryName(event.target.value)
        }}
      />
      <div className="custom_select">
        <select
          className="region_select"
          name="region"
          value={region}
          onChange={(event) => {
            handleRegion(event.target.value)
            setRegion(event.target.value)
          }}
        >
          <option value="" hidden>
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};
