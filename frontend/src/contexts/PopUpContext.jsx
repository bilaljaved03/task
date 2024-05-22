import Recat, {createContext,useState,useContext,useEffect}  from 'react'
const PopUpContext = createContext();
export const PopUpProvider = ({children}) =>{

const  [isPopUpDisplaying,setPopUpDisplay ] = useState(false);
return(
    <PopUpContext.Provider value={{isPopUpDisplaying,setPopUpDisplay}} >
        {children}
    </PopUpContext.Provider>
)
}
export const usePopUp = () => useContext(PopUpContext)