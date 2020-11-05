import React, { useContext } from 'react'

const MainContext = React.createContext()

export const useContacts = () => {
  return useContext(MainContext)
}

export const MainContextWrapp = ({ children }) => {

  return (
    <MainContext.Provider value={['work']}>
      {children}
    </MainContext.Provider>
  )
}
