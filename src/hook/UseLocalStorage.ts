import { useState , useEffect} from "react";

export default function UseLocalStorage<T>(key: string, initialValue: T){
    //load saved data from localStorage when the hook initialized
     const [value, setValue] = useState<T>(() =>{
         const storedValue = localStorage.getItem(key);
         if(storedValue !== null){
            return JSON.parse(storedValue) as T;
         }
         return initialValue;
     });
     
     //save the the updated value whenever it changes.

     useEffect(() =>{
        localStorage.setItem(key, JSON.stringify(value));
     },[key, value]);

    //return the value and settr, just like useState
    return [value, setValue] as const;

};




