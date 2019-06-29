import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function ActionLink(name){
    function handleClick(e){
        e.preventDefault();
        alert("You are trying to reach " + name + "!");
    }
    return(
      <Button onClick={handleClick}>
        {name}
      </Button>
    )
}
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
        <Grid item>
<<<<<<< HEAD
            <ButtonGroup color= "primary" aria-label="Outlined primary button group">
                <Button>Aaron R</Button>
                <Button>Wassim K</Button>
                <Button>Aaron Z</Button>
=======
            <ButtonGroup color="primary" aria-label="Outlined primary button group">
                {ActionLink("Aaron R")}
                {ActionLink("Wassim K")}
                {ActionLink("Aaron Z")}            
>>>>>>> 4fa38eb133039f23022277e46928876c22a1c407
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
        {ActionLink("hello")}
      </header>
    </div>
  );
}

export default App;
