import s from './Filter.module.scss'
import { SIZES, COLOURS, SEXES } from "../../services/contentData";
import filterImg from "../../assets/icons/filter.svg";
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { setSize, setColor, setSex } from '../../store/slices/filterSlicer';

const Filter = () => {
  const dispatch = useDispatch();
  const { size, color, sex } = useSelector((state: RootState) => state.filterSlice); 

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
              onClick={() => dispatch(setSize(size === sz.id ? null : sz.id))}
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
              onClick={() => dispatch(setColor(color === c.colour ? null : c.colour))}
              className={color === c.colour ? s.active : ""}
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