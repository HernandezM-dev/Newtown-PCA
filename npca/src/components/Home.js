import React from 'react';
import { Typography } from '@material-ui/core';

import Map from '../components/Map.js'
import ContactForm from './ContactForm.js';


function Home(){
    return(
        <div class="homeContainer">
            <div class="homePhoto"></div>
            <div class="contactHome">
                <div class="chTitle">
                    <Typography variant="h4">Contact Us</Typography>
                </div>
                <div class="chContent">
                <Typography variant="body1">Send all payments and correspondence to:</Typography>
                <Typography variant="h6">Newtown Park Condo Association</Typography>
                <Typography variant="body1">444 S. State Street, C-4, Newtown, PA 18940, US</Typography>
                <div>
                    <Typography variant="body16">Please email us at <a>info@newtownparkcondoassoc.com</a></Typography>
                    <Typography variant="body1">(267) 714-6722 (voice mail only, please email for faster response)</Typography>
                </div>
                </div>
            <ContactForm/>
            </div>
            <Map/>
        </div>
    )
}

export default Home;