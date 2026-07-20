import type { AppDispatch } from "../store";
import FilterService from "../../services/api";
import { filterSlice } from '../slices/filterSlicer'

export const fetchCurrentFilter =
  (
    page: number,
    sort?: string,
    searchValue?: string,
    size?: number,
    color?: string,
    sex?: string
  ) =>
  async (dispatch: AppDispatch) => {
    try {
        dispatch(filterSlice.actions.fetchFilter())
        const res = await FilterService.getFilteredProducts({page, sort,searchValue, size, color, sex});
        if (res.status >= 200 && res.status < 400) {
            dispatch(filterSlice.actions.fetchFilterSuccess(res))
        }else {
            dispatch(filterSlice.actions.fetchFilterError(res))
        }
    } catch(err: any) {
        alert('Unexpected error, please try again')
        console.log(err);
    }
  };
