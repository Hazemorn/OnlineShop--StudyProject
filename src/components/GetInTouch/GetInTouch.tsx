import {useState} from 'react';
import Button from "../Button/Button";
import s from "./GetInTouch.module.scss";

import letterImg from '../../assets/icons/letter.svg'

const GetInTouch = () => {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <section className={s.getInTouch}>
      <div className={s.getInTouch__wrapper}>
        <div className={s.getInTouch__title}>
          <h2>Stay up to date about our latest offers</h2>
        </div>
        <div className={s.getInTouch__form}>
          <img src={letterImg} alt='letter' loading='lazy'/> 
          <input
            type="search"
            placeholder={'Enter your email address...'}
            value={inputValue}
            onChange={(e) => {
                setInputValue(e.target.value);
            }}
            maxLength={50}
          />
          <Button title="Subscribe to Newsletter" max_width='400px'/>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
