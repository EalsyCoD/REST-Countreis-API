import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { DispatchFilterType, RootState } from '../../types'

const setFilter = (
  region: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch: DispatchFilterType) => {
    dispatch({
      type: 'SET-FILTER',
      payload: {
        region,
      },
    })
  }
}
const clearFilter = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch: DispatchFilterType) => {
    dispatch({
      type: 'CLEAR-FILTER',
      payload: {
        region: 'Filter by Region',
      },
    })
  }
}

export { setFilter, clearFilter }