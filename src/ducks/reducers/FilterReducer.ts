import { FilterRootState, FilterAction } from '../../types'

const initialState: FilterRootState = {
  region: 'Filter by Region',
}

const FilterReducer = (
  state: FilterRootState = initialState,
  action: FilterAction
): FilterRootState => {
  switch (action.type) {
    case 'SET-FILTER':
    case 'CLEAR-FILTER':
      return {
        region: action.payload.region,
      }
    default:
      return state
  }
}

export default FilterReducer