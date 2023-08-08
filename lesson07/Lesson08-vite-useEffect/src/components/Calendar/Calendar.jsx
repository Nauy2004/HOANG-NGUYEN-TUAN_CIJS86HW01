import React from 'react'
import Calendar from 'react-calendar'
import './calendar.css'
import { useEffect } from 'react'
function CalendarStyle(props){ 
    useEffect(() =>{
        console.log(document.getElementsByClassName('react-calendar__tile--active'))
    })
    return (
        <>
            <Calendar
                onChange={props.onChange}
                value={props.date} />
        </>
    )
}

export default CalendarStyle