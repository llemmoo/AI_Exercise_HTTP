import React from 'react'
import { FormControl, OutlinedInput, InputAdornment, IconButton} from '@mui/material/';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function UserSearchField(){
  const [user, setUser] = React.useState('');
    function userSearch(){
      fetch('http://localhost:3000/users?username=' + user).then(response => response.json()).then(json => console.log(json))
    }
    return (
      <>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <OutlinedInput
          id='input'
          value={user}
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setUser(event.target.value);}}
        />
        </FormControl> 
       <IconButton type="button" aria-label="search" onClick={()=> userSearch()}>
        <SearchIcon />
      </IconButton>
      </>
    )
    
}
