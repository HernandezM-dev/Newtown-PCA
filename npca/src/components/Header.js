import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Grid, Typography } from '@material-ui/core';


function Header() {
  return (
    <Paper container class="headerContainer">
      <Grid
      className="header"
      container
      direction="column"
      justify="space-between"
      // xs={12}
      // spacing={12}
      >
        <Grid
        container
        // xs={12}
        spacing={12}
        justify="space-around"
        >
          <h1>Newtown Park Condo Asssociation</h1>
          <h1>email - info@newtownparkcondoassoc.com</h1>
        </Grid>
        <Grid                         
        container
        xs={4}
        // spacing={12}
        justify="space-around"
        >
          <a>Home</a>
          <a>About Us</a>
          <a>Notices</a>
          <a>Documents</a>
          <a>Calendar</a>
          </Grid>
        </Grid>
    </Paper>
  );
}

export default Header;