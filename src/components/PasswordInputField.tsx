import React from 'react'
import { FormControl, InputLabel, OutlinedInput, InputAdornment, Grid } from '@mui/material/';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';

export default function PasswordInputField() {


  //constants for JSON data
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  //Creating a user via HTTP POST request
  function CreateUser(username, password){
      fetch('http://localhost:3000/users', {
        method: 'POST',
        body: JSON.stringify({
        username: username,
        password: password,
        }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
    setUsername('');
    setPassword('');
  }

    //Password icon functionality show/hide
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };



    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" >
        <OutlinedInput
          id='username'
          value={username}
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(event.target.value);}}
        />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(event.target.value);}}
            label="Password"
          />
        </FormControl>
        <IconButton type="button" aria-label="search" onClick={()=> CreateUser(username, password)}>
        <PersonIcon/>
      </IconButton>
        </Grid>
    )
  }