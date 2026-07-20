import s from "./Сatalog.module.scss";
import { useState, useEffect } from "react";

import GetInTouch from "../../components/GetInTouch";
import Sector from "../../components/Sector";
import CardItem from "../../components/CardItem/CardItem";
import Skeleton from "../../components/Skeleton/Skeleton";

import { OPTIONS } from "../../services/contentData";
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store/store';
import { setPage, setSearchValue, setSort } from '../../store/slices/filterSlicer';
//import SearchField from "../../components/SearchField";
import Filter from "../../components/Filter";
import PaginationApp from "../../components/PaginationApp";
import { setSortId } from "../../store/slices/sortSlicer";
//import { fetchCurrentFilter } from "../../store/thunks/fetchFilter";
//import { useCustomDispatch } from '../../hooks/store'; 

const Catalog = () => {
  const dispatch = useDispatch();
  const sortId = useSelector((state: RootState) => state.sortSlice );

  //const dispatch = useCustomDispatch(); 
  //const isLoading = useSelector();
  // const [sort, setSort] = useState<string>("");
  const [dropDown, setDropDown] = useState<boolean>(false);
  // const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [searchValue, setSearchValue] = useState<string>("");
  // const [page, setPage] = useState<number>(1);
  //const [pages, setPages] = useState<number>(1);
  //   const filteredGoods = useMemo(() => {
  //     return GOODS.filter((item) => {
  //       return item.price >= priceRange[0] && item.price <= priceRange[1];
  //     });
  //   }, [priceRange])

  // useEffect(() => {
  //   setIsLoading(true);
  //   axios
  //     .get(
  //       `https://6a5374948547b9f7111b8429.mockapi.io/api/products/items?page=${page}&limit=8&${
  //         sort !== "" ? `&sortBy=price&order=${sort}` : ""
  //       }${searchValue !== "" ? `&search=${searchValue}` : ""}`
  //     )
  //     .then((response) => {
  //       setItems(response.data);
  //       // setPages(Math.ceil(response.data.length / 8) || 1);
  //       //setTimeout(() => setIsLoading(false), 2000);//for test
  //       setIsLoading(false);
  //     }).catch((error) => {
  //       if (axios.isCancel(error)) return; 
  //       console.error(error);
  //       setIsLoading(false);
  //     });
  // }, [sort, page, searchValue]);
  // const { page, sort, searchValue, size, color, sex } = useSelector(
  //   (state: RootState) => state.filterSlice
  // );

  // useEffect(() => {
  //   //dispatch(fetchCurrentFilter({ page, sort, searchValue, size, color, sex }));
  // }, [page, sort, searchValue, size, color, sex, dispatch]);

  const onClickSort = (id) => {
    console.log(id);
    dispatch(setSortId(id));
  }

  return (
    <div className={s.catalog}>
      <div className={s.catalog__wrapper}>
        <Filter />
        <div className={s.catalog__goods}>
          <div className={s.catalog__sorting}>
            {/* <SearchField onSearch={(value) => dispatch(setSearchValue(value))}  /> */}
            <p onClick={() => setDropDown((prev) => !prev)}>Sorting by...</p>
            {dropDown && (
              <ul>
                {OPTIONS.map((o) => (
                  <li key={o.id} onClick={() => onClickSort(o.id)}>
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
            currentPage={1}//page
            onChangePage={(p) => setPage(p)}
            pageCount={2}
          />
        </div>
      </div>
      <GetInTouch />
    </div>
  );
};

export default Catalog;
