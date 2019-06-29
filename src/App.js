import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SpMenu from './sp-menu/SpMenu'

function App() {
  return (
    <div className="App">
      <br/>
      <SpMenu></SpMenu>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Grid item>
            <ButtonGroup color="primary" aria-label="Outlined primary button group">
                <Button>Aaron R</Button>
                <Button>Wassim</Button>
                <Button>Aaron Z</Button>
            </ButtonGroup>
        </Grid>
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
