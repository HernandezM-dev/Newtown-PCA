import React from 'react';
import Link from 'react-router-dom'
import {Typography, Button} from '@material-ui/core';
import pic from '../Assets/defaultProfilePic.jpg'

function About(){
    return(
        <div class="aboutContainer">
            <div class="aboutTitle">
            <Typography variant="h3">About Us</Typography>
            </div>
            <div class="disclaimerContainer">
            <Typography variant="body1">Please do not contact members at their homes or businesses.</Typography>
            <Typography variant="body1">Please keep in mind we are volunteer neighbors not debt collectors.</Typography>
            <Typography variant="body1">Thanks ahead for your prompt payments.</Typography>
            </div>

            <div class="boardContainer">
                <Typography variant="h4">Current Board Members</Typography>
                <div class="memberContainer">
                    <div class="bProfile">
                        <img src={pic} alt=""></img>
                        <Typography variant="body1">Donna Picone - President</Typography>
                    </div>
                    <div>
                        <img src={pic} alt=""></img>
                        <Typography variant="body1">​Mary Falen - Secretary/Treasurer</Typography>
                    </div>
                    <div>
                        <img src={pic} alt=""></img>
                        <Typography variant="body1">Mike White - Vice President/Webmaster</Typography>
                    </div>
                </div>
            </div>

            <div class="bottomContainer">
                <div class="minContainer">
                    <Typography variant="h5">See the Most Recent Minutes!</Typography>
                    <Button variant="outlined" size="large">NPCA Minutes</Button>
                </div>
                <div class="payContainer">
                    <Typography variant="h5">Send all payments and correspondence to:</Typography>
                    <Typography variant="body1">Newtown Park Condominium Association</Typography>
                    <Typography variant="body1">​444 S. State Street C-4</Typography>
                    <Typography variant="body1">​Newtown, PA18940</Typography>
                </div>
            </div>
        </div>
    )
}

export default About;