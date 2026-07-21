import s from "./Сatalog.module.scss";
import { useState, useEffect } from "react";

import GetInTouch from "../../components/GetInTouch";
import Sector from "../../components/Sector";
import CardItem from "../../components/CardItem/CardItem";
import Skeleton from "../../components/Skeleton/Skeleton";

import { OPTIONS } from "../../services/contentData";

import { setSort, setPage, setSearchValue } from '../../store/slices/filterSlicer';
import SearchField from "../../components/SearchField";
import Filter from "../../components/Filter";
import PaginationApp from "../../components/PaginationApp";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchCurrentFilter } from "../../store/thunks/fetchFilter";


const Catalog = () => {
  const dispatch = useAppDispatch();
  const {sort, isLoading, items, page, size, color, sex, searchValue} = useAppSelector(state => state.filterReducer)

  const [dropDown, setDropDown] = useState<boolean>(false);

  //   const filteredGoods = useMemo(() => {
  //     return GOODS.filter((item) => {
  //       return item.price >= priceRange[0] && item.price <= priceRange[1];
  //     });
  //   }, [priceRange])


  useEffect(() => {
    dispatch(fetchCurrentFilter(page, sort, searchValue, size, color, sex));
  }, [page, sort, searchValue, size, color, sex, dispatch]);


  return (
    <div className={s.catalog}>
      <div className={s.catalog__wrapper}>
        <Filter />
        <div className={s.catalog__goods}>
          <div className={s.catalog__sorting}>
            <SearchField onSearch={(value) => dispatch(setSearchValue(value))}  />
            <p onClick={() => setDropDown((prev) => !prev)}>Sorting by...</p>
            {dropDown && (
              <ul>
                {OPTIONS.map((o) => (
                  <li key={o.id} onClick={()=>dispatch(setSort(o.value))}>
                    - {o.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Sector
            body={
              <div className={s.content}>
                {isLoading
                  ? [...new Array(8)].map((_, index) => (
                      <Skeleton key={index} />
                    ))
                  : //findShoes
                    items.map((item) => <CardItem key={item.id} {...item} />)}
              </div>
            }
          />
          <PaginationApp
            currentPage={page}
            onChangePage={(p) => dispatch(setPage(p))}
            pageCount={2}
          />
        </div>
      </div>
      <GetInTouch />
    </div>
  );
};

export default Catalog;
