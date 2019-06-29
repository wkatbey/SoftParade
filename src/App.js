import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <Grid item>
            <ButtonGroup color="primary" aria-label="Outlined primary button group">
                <Button>Aaron R</Button>
                <Button>Wassim K</Button>
                <Button>Aaron Z</Button>
            </ButtonGroup>
        </Grid>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Why don't you try educating yourself, loser?
        </a>
      </header>
    </div>
  );
}

export default App;
