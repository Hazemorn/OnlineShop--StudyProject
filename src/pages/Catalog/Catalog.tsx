import s from "./Сatalog.module.scss";
import { useState, useEffect } from "react";

import GetInTouch from "../../components/GetInTouch";
import Sector from "../../components/Sector";
import CardItem from "../../components/CardItem/CardItem";
import Skeleton from "../../components/Skeleton/Skeleton";

import { OPTIONS } from "../../store/contentData";
import type { Item } from "../../types/types";

import SearchField from "../../components/SearchField";
import Filter from "../../components/Filter";
import PaginationApp from "../../components/PaginationApp";

const Catalog = () => {
  const [sort, setSort] = useState<string>("");
  const [dropDown, setDropDown] = useState<boolean>(false);
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  //   const filteredGoods = useMemo(() => {
  //     return GOODS.filter((item) => {
  //       return item.price >= priceRange[0] && item.price <= priceRange[1];
  //     });
  //   }, [priceRange])

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://6a5374948547b9f7111b8429.mockapi.io/api/products/items?page=${page}&limit=8&${
        sort !== "" ? `?sortBy=price&order=${sort}` : ""
      }${searchValue !== "" ? `?search=${searchValue}` : ""}
      `
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((json) => {
        setItems(json);
        //setTimeout(() => setIsLoading(false), 2000);//for test
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sort, page]);

  function find(v) {
    setSearchValue(v);
  }
  // const findShoes = items
  //   .filter((obj) => {
  //     if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
  //       return true;
  //     }
  //     return false;
  //   })
  //   .map((item) => <CardItem key={item.id} {...item} />);

  return (
    <div className={s.catalog}>
      <div className={s.catalog__wrapper}>
        <Filter />
        <div className={s.catalog__goods}>
          <div className={s.catalog__sorting}>
            <SearchField find={find} />
            <p onClick={() => setDropDown((prev) => !prev)}>Sorting by...</p>
            {dropDown && (
              <ul>
                {OPTIONS.map((o) => (
                  <li key={o.id} onClick={() => setSort(o.value)}>
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
