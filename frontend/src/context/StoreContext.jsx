import { createContext, useState, useEffect, useContext } from 'react';


const StoreContext = createContext();

export default StoreContext;

export  function StoreProvider({ children })
{
  
  const [categories, setCategories] = useState(() => {
    
    const savedData = localStorage.getItem('categories');
    return savedData ? JSON.parse(savedData) : [];
  })
  
    useEffect(() => {
       localStorage.setItem('categories', JSON.stringify(categories));
     }, [categories]);

  return <StoreContext.Provider value={{categories,setCategories}}>
    {children}
  </StoreContext.Provider>
};