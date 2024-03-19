import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


export default function FullWidthGrid() {
  return (
      <Grid container spacing={1}>
        <Grid item xs={12} md={12}>
          <img src="/images/sfondo2.png" width ="100%"/>
        </Grid>
        <Grid container spacing={1}>
        <Grid item xs={6} md={6}>
          <img src="/images/sfondo3.png" width ="100%"/>
        </Grid>
        <Grid item xs={6} md={6}>
          <img src="/images/sfondo1.png" width ="100%"/>
        </Grid>
        </Grid>
        <Grid container spacing={1}>
        <Grid item xs={3} md={3}>
          <img src="/images/sfondo4.png" width ="100%"/>
        </Grid>
        <Grid item xs={3} md={3}>
          <img src="/images/sfondo5.png" width ="100%"/>
        </Grid>
        <Grid item xs={3} md={3}>
          <img src="/images/sfondo6.png" width ="100%"/>
        </Grid>
        <Grid item xs={3} md={3}>
        <img src="/images/sfondo7.png" width="100%" />
        </Grid>
        </Grid>
        <Grid container spacing={1}>
        <Grid item xs={4} md={4}>
          <img src="/images/sfondo8.png" width ="100%"/>
        </Grid>
        <Grid item xs={4} md={4}>
          <img src="/images/sfondo9.png" width ="100%"/>
        </Grid>
        <Grid item xs={4} md={4}>
          <img src="/images/sfondo10.png" width ="100%"/>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
        <Grid item xs={12} md={2}>
          <img src="/images/sfondo11.png" width ="100%"/>
        </Grid>
        <Grid item xs={12} md={2}>
          <img src="/images/sfondo12.png" width ="100%"/>
        </Grid>
        <Grid item xs={12} md={2}>
          <img src="/images/sfondo13.png" width ="100%"/>
        </Grid>
        <Grid item xs={12} md={2}>
          <img src="/images/sfondo14.png" width ="100%"/>
        </Grid>
        <Grid item xs={12} md={2}>
          <img src="/images/sfondo15.png" width ="100%"/>
        </Grid>
        <Grid item xs={6} md={2}>
        <img src="/images/sfondo16.png" width="100%" />
        </Grid>
        <Grid item xs={6} md={2}>
        </Grid>  
        </Grid>
      </Grid>
  );
}