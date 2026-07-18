import {useState} from 'react';
import type { SubmitEvent } from "react";
import Button from "../Button/Button";
import s from "./GetInTouch.module.scss";

import letterImg from '../../assets/icons/letter.svg'

const GetInTouch = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedValue = inputValue.trim();

    if (trimmedValue.length === 0) {
      setError("Please, enter your email");
      return;
    }
    setError("");
  };
  const hasError: boolean = !!(error);
  const placeholderText: string = hasError ? (error) : "Enter your email address...";
  
  return (
    <section className={s.getInTouch}>
      <div className={s.getInTouch__wrapper}>
        <div className={s.getInTouch__title}>
          <h2>Stay up to date about our latest offers</h2>
        </div>
        <form onSubmit={handleSubmit} className={s.getInTouch__form}>
          <img src={letterImg} alt='letter' loading='lazy'/> 
          <input
            type="email"
            placeholder={placeholderText}
            value={inputValue}
            onChange={(e) => {
                setInputValue(e.target.value);
            }}
            maxLength={50}
          />
          <Button title="Subscribe to Newsletter" max_width='400px'/>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
