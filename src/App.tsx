import PasswordInputField from './components/PasswordInputField'
import UserSearchField from './components/UserSearchField'
import JSONTable from './components/JSONTable'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

function App() {
  return (
    <>
    <Grid container direction="row" justifyContent="center" alignItems="center" marginTop='20vh' >
    <Typography variant='h6'> Enter the username and password you'd like </Typography>
    </Grid>
    <PasswordInputField/>
    <Grid container direction="column" justifyContent="center" alignItems="center" marginTop='5vh' >
    <Typography variant='h6'> Search for a user's info </Typography>
    <Grid container direction="row" justifyContent="center" alignItems="center" >
    <UserSearchField/>
    </Grid>
    <Grid container direction="row" alignItems='center' maxWidth='50vh' marginTop='3vh'>
    <JSONTable/>
    </Grid>
    </Grid>
    </>
  )
}

export default App
