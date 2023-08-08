import React from 'react'

function Day(props) {
    let dateMonthYear = props.dateMonthYear
  return (
    <div>
        <h1>
            Ngày: {dateMonthYear.date}/{dateMonthYear.month}/{dateMonthYear.year}
        </h1>
    </div>
  )
}

export default Day