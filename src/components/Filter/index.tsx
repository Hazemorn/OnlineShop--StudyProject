import s from './Filter.module.scss'
import { SIZES, COLOURS, SEXES } from "../../services/contentData";
import filterImg from "../../assets/icons/filter.svg";
import { setSize, setColor, setSex } from '../../store/slices/filterSlicer';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const Filter = () => {
  const dispatch = useAppDispatch();
  const { size, color, sex } = useAppSelector(state => state.filterReducer);

  const filterReset = () => {
    dispatch(setSize(null));
    dispatch(setColor(null));
    dispatch(setSex("both"));
  }
  return ( 

      <div className={s.filter}>
      <div className={s.filter__header}>
        <h2>Filter</h2>
        <img src={filterImg} alt={filterImg} loading="lazy" onClick={()=>filterReset()}/>
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
              onClick={() => dispatch(setSize(size === sz.size ? null : sz.size))}
              className={size === sz.size ? s.active : ""}
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
              onClick={() => dispatch(setColor(color === c.colour.slice(6, -1) ? null : c.colour.slice(6, -1)))}
              className={color === c.colour.slice(6, -1) ? s.active : ""}
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
              onClick={() => dispatch(setSex(sx.name))}
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