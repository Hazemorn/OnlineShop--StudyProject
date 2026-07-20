import s from "./SearchField.module.scss";
import { useState, useRef } from "react";
import magnifierImg from "../../assets/icons/magnifier.svg";


interface SearchFieldProps {
  onSearch: (value: string) => void;
}

const SearchField = ({ onSearch }: SearchFieldProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedValue = inputValue.trim();

    if (trimmedValue.length === 0) {
      onSearch("");
      return;
    }
    onSearch(trimmedValue);
  };

  return (
    <form onSubmit={handleSubmit} className={s.search}>
      <input
        type="search"
        ref={inputRef}
        placeholder="Search"
        value={inputValue}
        onChange={(e) => {
          const value = e.target.value;
          setInputValue(value);
          if (value === "") {
            onSearch("");
          }
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
