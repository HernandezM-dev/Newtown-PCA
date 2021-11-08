import { Typography } from '@material-ui/core';
import React, {useState} from 'react';
import Doc from '../Assets/test.pdf';

const dd = [
    {
        name: "firstDocument",
        doc: Doc,
    },
    {
        name: "secondDocument",
        doc: Doc,
    },
    {
        name: "thirdDocument",
        doc: Doc,
    },

]
function Documents(){

    const [dummyData, setDummyData] = useState(dd)
    return(
        <div class="documentsContainer">
            <div class="dTitleContainer">
            <Typography variant="h3">Documents</Typography>
            </div>
            <div class="dContainer">
                {
                    dummyData.map((data) =>{
                        return(
                            <a href={data.doc} download="CurrentPDF" class="cContainer">
                            <Typography variant="body1">{data.name}</Typography>
                            <Typography variant="body1">Download</Typography>
                            </a>
                        )
                    })   
                }
            </div>

        </div>
    )
}

export default Documents;