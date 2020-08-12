import {useState} from "react";

export const useLocalStorage=(key,initialValue)=>{
    const [storedValue,setStoredValue]=useState(()=>{
        //if there is any initial value then that value will be passed and stored 
        if(window.localStorage.getItem(key)){
            return JSON.parse(window.localStorage.getItem(key));
        }
        //otherwise set initial value
        window.localStorage.setItem(key,JSON.stringify(initialValue));
        return initialValue;
    });

    const setValue=(value)=>{
        //set local storage functionality
        setStoredValue(value);
        window.localStorage.setItem(key,JSON.stringify(value));
     };
     return [storedValue,setValue];
};