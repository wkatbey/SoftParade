import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className="App">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>

        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <Button variant="contained" color="primary">
          Default
        </Button>
        <Grid item>
            <ButtonGroup color="primary" aria-label="Outlined primary button group">
                <Button>Aaron R</Button>
                <Button>Wassim</Button>
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
