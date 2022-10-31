import { useContext } from 'react'

import { appContext } from '../contexts/AppContext'

export const useAppContext = () => {
  return useContext(appContext)
}
