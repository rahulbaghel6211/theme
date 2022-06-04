import React, { useState } from 'react';

export const AppContext=React.createContext();
function AppContextProvider({children}){
    const[state,setState]=useState("light");
    const toggletheme=()=>{
        state==="light"?setState("dark"):setState("light");
    }
    return(
        <AppContext.Provider value={[state,toggletheme]}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider