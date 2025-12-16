import { createContext, useState } from "react";


export const AppContext=createContext()

const AppContextProvider=(props)=>{
const [open, setOpen] = useState(false);
  const [user, setUser] = useState(false);
  const [showUserLogin,setShowUserLogin]=useState(false);

  const value={
    open,setOpen,user,setUser
  }
  return (
    <AppContext.Provider value={value}>

      {props.children}  

    </AppContext.Provider>
  )
}

export default AppContextProvider;