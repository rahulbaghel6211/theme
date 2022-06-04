import { useContext } from 'react';

import { AppContext } from '../AppContext/AppContextProvider';
import style from './Button.module.css';

function Button({text,onClick}){
   const [theme] = useContext(AppContext)
    return <div className={`${style.buttonBase}
     ${theme==='light'? 
     style.buttonLight:style.buttonDark}`}
     onClick={onClick}
     >{text}</div>
}
export default Button;