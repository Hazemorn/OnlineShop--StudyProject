import s from "./SearchField.module.scss";
import { useState } from "react";
import magnifierImg from "../../assets/icons/magnifier.svg";


interface SearchFieldProps {
  find: (value: string) => void;
}

const SearchField = ({ find }: SearchFieldProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedValue = inputValue.trim();

    if (trimmedValue.length === 0) {
      find("");
      return;
    }
    find(trimmedValue);
    //setSearchQuery(trimmedValue);
  };

  return (
    <form onSubmit={handleSubmit} className={s.search}>
      <input
        type="search"
        placeholder="Search"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        maxLength={70}
      />
      <button type="submit">
        <img src={magnifierImg} alt={magnifierImg} loading="lazy" />
      </button>
    </form>
  );
};

export default SearchField;
