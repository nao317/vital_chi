"use client"

import {useState, useEffect } from 'react';

const DayCounter=()=>{
    const [dayCount, setDayCount] = useState(1);

    useEffect(()=>{
        const STORAGE_KEY = 'app_start_date';

        const savedStartDate = localStorage.getItem(STORAGE_KEY)
        const now =new Date()

        let startDate;
        
        if (savedStartDate){
            startDate =new Date(parseInt(savedStartDate));
        } else{
            startDate = now;
            localStorage.setItem(STORAGE_KEY, now.getTime().toString());

        }
        const diffTime = now.getTime() - startDate.getTime();
        const diffDays = Math.floor(diffTime/(1000*60*60*24));

        setDayCount(diffDays+1);
    }, []);

    return (
        <span>
            Day{dayCount}
        </span>
    );
};

export default DayCounter;