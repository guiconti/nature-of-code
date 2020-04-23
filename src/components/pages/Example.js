import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Header from '../elements/shared/Header';
import '../../styles/example-page.css';

// Since this component is simple and static, there's no parent container for it.
const ExamplePage = () => {
  return (
    <div className="root">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className="paper">xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className="paper">xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className="paper">xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className="paper">xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className="paper">xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className="paper">xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className="paper">xs=3</Paper>
        </Grid>
      </Grid>
      <Header title="Example" />
      <p>
        This example page.
      </p>
      <p>
        <Link to="/badlink">Click this bad link</Link> to see the 404 page.
      </p>
    </div>
  );
};

export default ExamplePage;
