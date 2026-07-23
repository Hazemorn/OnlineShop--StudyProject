import type { AppDispatch } from "../store";
import FilterService from "../../services/api";
import { filterSlice } from '../slices/filterSlicer'

export const fetchCurrentFilter =
  (
    page: number,
    sort?: string,
    searchValue?: string,
    size?: string,//number
    color?: string,
    sex?: number,//string
  ) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(filterSlice.actions.fetchFilter());
      const { res, hasActiveFilters } = await FilterService.getFilteredProducts({ page, sort, searchValue, size, color, sex });
      
      dispatch(filterSlice.actions.fetchFilterSuccess({
        items: res.data,
        status: res.status,
        message: res.statusText || "OK",
        hasActiveFilters: hasActiveFilters, 
      }));

  } catch (err: any) {
      if (err.response) {
          const res = err.response;

          if (res.status === 404) {
              dispatch(filterSlice.actions.fetchFilterSuccess({
                items: [],
                status: 404,
                message: "Not Found",
                hasActiveFilters: true,
              }));
          } else {
              dispatch(filterSlice.actions.fetchFilterError({
                status: res.status,
                message: res.statusText || "Server Error"
              }));
          }
      } else {
          alert('Unexpected error, please try again');
          console.log(err);
          dispatch(filterSlice.actions.fetchFilterError({
            status: 500,
            message: err.message || "Network Error"
          }));
      }
  }
    // try {
    //     dispatch(filterSlice.actions.fetchFilter())
    //     const {res, hasActiveFilters} = await FilterService.getFilteredProducts({page, sort,searchValue, size, color, sex});
    //     if (res.status >= 200 && res.status < 400) {
    //         dispatch(filterSlice.actions.fetchFilterSuccess({
    //           items: res.data,
    //           status: res.status,
    //           message: res.statusText || "OK",
    //           hasActiveFilters: hasActiveFilters, 
    //          // totalCount: Number(res.headers['x-total-count']) || 0
    //         }))//res
    //     // }else if( res.status === 404) {//not found
    //     //   //not found
    //     }
    //     else {
    //         dispatch(filterSlice.actions.fetchFilterError(res))
    //         console.log('here1')
    //     }
    // } catch(err: any) {
    //     alert('Unexpected error, please try again')
    //     console.log(err);
    //     console.log('here2.Catch')
    // }
  };
