import { Typography } from '@material-ui/core';
import React, {useState} from 'react';
import genImg from '../Assets/gImage.jpg';

const dd = [
    {
        img: genImg,
        date: "10-1-2021",
        title: "Sewage notice",
        detail: "this is the next big meeting",
    },
    {
        img: genImg,
        date: "10-2-2021",
        title: "gas maintenance",
        detail: "this is the third",
    },
    {
        img: genImg,
        date: "10-3-2021",
        title: "Lawn services",
        detail: "this is the last meeting",

    },

]
function Calendar(){

    const [dummyData, setDummyData] = useState(dd)
    return(
        <div class="noticesContainer">
            <div class="nTitleContainer">
            <Typography variant="h3">Upcoming Events</Typography>
            </div>
            <div class="nContainer">
                {
                    dummyData.map((data) =>{
                        return(
                            <div class="nEvent">
                                <div>
                                   <img src={data.img} alt="" width="100" height="100"></img>
                                </div>
                                <div class="nEventTop">
                                    <Typography variant="body1">{data.date}</Typography>
                                    <Typography variant="h5">{data.title}</Typography>
                                    <Typography variant="h6">{data.detail}</Typography>
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