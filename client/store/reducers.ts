import type { Reducer } from 'redux'

import type { ActCount } from './IAction'
import type { IState } from './IState'

export const count: Reducer<IState['count'], ActCount> = (
  state = 0,
  action
) => {
  switch (action.type) {
    case 'add':
      return state + 1
    case 'sub':
      return state - 1
    default:
      return state
  }
}
