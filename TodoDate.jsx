import { useEffect, useState } from "react";


export const TodoDate = ()=>{
    const [dateTime, setDateTime]= useState()


    useEffect(() => {
        const interval = setInterval(() => {
          const now = new Date();
          const todayDate = now.toLocaleDateString();
          const todayTime = now.toLocaleTimeString();
          setDateTime(`${todayDate} - ${todayTime}`);
        }, 1000);
    
        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
      }, []);
    return(
        <h2 className="date-time">{dateTime}</h2>
    )
}