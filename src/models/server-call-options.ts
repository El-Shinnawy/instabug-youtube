import { apiMethods } from '@/enums/apiMethods';

export interface ServerCallOptions {
    api: string,
    searchResultsCount?: number,
    params?:any,
    method?: apiMethods
  }