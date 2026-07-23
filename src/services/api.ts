import axios from "axios";
import type { AxiosResponse } from "axios";
import type { Item } from "../store/types/types";

const apiURL = import.meta.env.VITE_API_URL;
export const limit = 8;

interface FilteredProductsResponse {
  res: AxiosResponse<Item[]>;
  hasActiveFilters: boolean;
}

interface FetchFilterParams {
    page: number;
    sort?: string;
    searchValue?: string;
    size?: string | null;//number
    color?: string | null;
    sex?: number;//string
  }
  
export default class FilterService {
  static async getFilteredProducts({
    page,
    sort,
    searchValue,
    size,
    color,
    sex
  }: FetchFilterParams): Promise<FilteredProductsResponse> {
    const sortQuery = sort ? `&sortBy=price&order=${sort}` : "";
    const searchQuery = searchValue ? `&search=${searchValue}` : "";
    const sizeQuery = size ? `&search=${size}` : "";//`&size=${size}`
    const colorQuery = color ? `&color=${color}` : "";
    const sexQuery = sex && sex !== 1 ? `&sex=${sex}` : ""; //'both'

    const hasActiveFilters = Boolean(sort || searchValue || size || color || (sex && sex !== 1));//'both'
    const paginationQuery = hasActiveFilters ? "" : `?page=${page}&limit=${limit}`;
    
    const queryParams = [paginationQuery, sortQuery, searchQuery, sizeQuery, colorQuery, sexQuery]
    .filter(Boolean)
    .join("");
    const separator = queryParams.startsWith("&") ? "?" : "";
    const cleanParams = queryParams.startsWith("&") ? queryParams.slice(1) : queryParams;

    const url = `${apiURL}${separator}${cleanParams}`;
    const res = await axios.get(url);
    return {
      res,
      hasActiveFilters
    };
  }
}

