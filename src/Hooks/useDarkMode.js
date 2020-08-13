
import { useEffect } from "react";
import {useLocalStorage} from "./useLocalStorage";

export const useDarkMode=()=>{
    const [toggleState,setToggleState]=useLocalStorage('dark-mode-enabled')
    useEffect(()=>{
        const className='dark-mode';
        const element=window.document.body;
        if(toggleState){
            element.classList.add(className);
        }
        else{
            element.classList.remove(className);
        }

    },[toggleState]);
    return[toggleState,setToggleState];
}

