import { Typography } from '@material-ui/core';
import React, {useState} from 'react';

const dd = [
    {
        date: "10-1-2021",
        title: "big Meeting 1",
        detail: "this is the next big meeting",
        time: "10AM - 11AM",
        location: "my house",
    },
    {
        date: "10-2-2021",
        title: "big Meeting 2",
        detail: "this is the third",
        time: "1PM - 3AM",
        location: "my house",
    },
    {
        date: "10-3-2021",
        title: "big Meeting 3",
        detail: "this is the last meeting",
        time: "4PM - 6PM",
        location: "my house",
    },

]
function Calendar(){

    const [dummyData, setDummyData] = useState(dd)
    return(
        <div class="calendarContainer">
            <div class="cTitleContainer">
            <Typography variant="h3">Upcoming Events</Typography>
            </div>
            <div>
                {
                    dummyData.map((data) =>{
                        return(
                            <div class="cEvent">
                                <Typography variant="h5">{data.date}</Typography>
                                <div class="cEventTop">
                                    <Typography variant="h5">{data.title}</Typography>
                                    <Typography variant="h6">{data.detail}</Typography>
                                </div>
                                <div class="cEventTop">
                                    <Typography variant="h6">{data.time}</Typography>
                                    <Typography variant="h6">{data.location}</Typography>
                                </div>
                            </div>   
                        )
                    })   
                }
            </div>

        </div>
    )
}

export default Calendar;