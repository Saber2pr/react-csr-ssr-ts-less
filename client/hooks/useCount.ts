import { useDispatch, useSelector } from 'react-redux'

import type { ActCount, IState } from '../store'

export const useCount = (): [number, (type: ActCount['type']) => ActCount] => {
  const count = useSelector<IState, number>(state => state?.count)
  const dispatch = useDispatch()
  return [count, (type: ActCount['type']) => dispatch<ActCount>({ type })]
}
