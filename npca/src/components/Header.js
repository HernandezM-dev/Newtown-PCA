import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Grid, Typography, Container } from '@material-ui/core';
import {Link} from 'react-router-dom';


function Header() {

  return (
    <Paper container id="headerContainer">
      <div className="header">
        <div className="headerTop">
          <Typography variant="h4" component="h1">Newtown Park Condo Asssociation</Typography>
          <Grid
          justifyContent="flex-end"
          container
          md={6}
          xs={12}          >
          <Typography variant= "body1">email - info@newtownparkcondoassoc.com</Typography>
          <p className="seperator"> | </p>
          <Typography variant= "body1">444 S. State Street, C-4, Newtown, PA 18940, US</Typography>
          </Grid>
        </div>
        <Grid      
        className="nav"                   
        container
        xs={4}
        justifyContent="space-around"
        >
          <Typography variant="h6"><Link to='/'>Home</Link></Typography>
          <Typography variant="h6"><Link to="/about">About Us</Link></Typography>
          <Typography variant="h6"><Link to="/notices">Notices</Link></Typography>
          <Typography variant="h6"><Link to="/Documents">Documents</Link></Typography>
          <Typography variant="h6"><Link to="/calendar">Calendar</Link></Typography>
          </Grid>
      </div>
    </Paper>
  );
}

export default Header;