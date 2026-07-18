import s from './Filter.module.scss'
import { useState} from "react";
import { SIZES, COLOURS, SEXES } from "../../store/contentData";
import filterImg from "../../assets/icons/filter.svg";

const Filter = () => {
    const [size, setSize] = useState<number>(null);
    const [color, setColor] = useState<number>(null);
    const [sex, setSex] = useState<string>('both');
    return ( 

        <div className={s.filter}>
        <div className={s.filter__header}>
          <h2>Filter</h2>
          <img src={filterImg} alt={filterImg} loading="lazy" />
        </div>
        {/* <div className={s.filter__price}>
          <h4>Price:</h4>
          <div className={s.filter__price__values}>
              <input />
              <input />
          </div>
        </div> */}
        <div className={s.filter__size}>
          <h4>Size:</h4>
          <ul className={s.selector}>
            {SIZES.map((sz) => (
              <li
                key={sz.id}
                onClick={() =>
                  setSize((prev) => (prev === sz.id ? null : sz.id))
                }
                className={size === sz.id ? s.active : ""}
              >
                {sz.size}
              </li>
            ))}
          </ul>
        </div>
        <div className={s.filter__color}>
          <h4>Colour:</h4>
          <ul className={s.selector}>
            {COLOURS.map((c) => (
              <li
                key={c.id}
                onClick={() =>
                  setColor((prev) => (prev === c.id ? null : c.id))
                }
                className={color === c.id ? s.active : ""}
                style={{ backgroundColor: c.colour }}
              ></li>
            ))}
          </ul>
        </div>
        <div className={s.filter__sex}>
          <h4>Sex:</h4>
          <ul className={s.selectorSex}>
            {SEXES.map((sx) => (
              <li
                key={sx.id}
                onClick={() => setSex(sx.name)}
                className={sex === sx.name ? s.active : ""}
              >
                {sx.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
     );
}
 
export default Filter;