import React, { useState, useEffect } from 'react'
import CalendarStyle from './Calendar/Calendar'
import Day from './Days/Day'
import Time from './Time/Time'
import './homPage.css'

function HomPage() {
    const [date, setDate] = useState(new Date())
    const onChange = () => {
        setDate(date)
    }
    const dateMonthYear = {
        date: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear()
    }
    return (
        <div className='homePage'>
            <Time/>
            <Day dateMonthYear={dateMonthYear} />
            <CalendarStyle onChange={onChange} value={date} />
        </div>
    )
}

export default HomPage