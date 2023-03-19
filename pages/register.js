import {React,useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Paper } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const register = () => {

    {/*const CustomePaper = styled(Paper)`
        box-shadow: 1px 2px 23px 8px rgba(0,0,0,0.75);
`;
*/}
    const CustomeSignupBg = styled(Container)`
        background: rgb(101,138,244);
        background: linear-gradient(75deg, rgba(101,138,244,1) 0%, rgba(244,177,246,1) 100%);
`;
const [passwordVisible, setPasswordVisible] = useState(false);
const [showPassword, setShowPassword] = useState(false);

const handleClickShowPassword = () => setShowPassword(!showPassword);

  
return (
    <Container maxWidth="sm">
        <Paper sx={{ margin:"200px auto",display: 'flex',flexDirection: 'column',alignItems: 'center' , pt:"50px" ,pb:"100px",boxShadow: 3,width:"500"}}>
            <Typography variant="h2" gutterBottom sx={{textAlign:"center",marginBottom: "40px",fontWeight:"bold"}}>
                Create Account
            </Typography>
                <FormControl sx={{ marginTop: "40px", alignItems:"center",margin:"0 auto"}} >
                    {/*<TextField id="filled-basic" label="Name" variant="filled" sx={{ marginBottom:"20px",width: 400 }}/>*/}
                    <TextField id="input-with-icon-textfield" label="Name" InputProps={{startAdornment: (
                    <InputAdornment position="start">
                    <AccountCircle />
                    </InputAdornment>
                        ),
                        }}
        variant="standard" sx={{ marginBottom:"20px",width: 400 }}
      />
       <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
              
            }
            
          />
                    <TextField id="email" label="Email" type="email" variant="standard" sx={{ marginBottom:"20px",width: 400 }}/>
                    <TextField id="outlined-basic" label="Name" variant="outlined" sx={{ marginBottom:"20px",width: 400 }}/>
                    {/*<TextField id="email" label="Email" type="email" variant="filled" sx={{ marginBottom: "20px",width: 400 }}/>*/}
                    <TextField id="password" label="Password" type="password" variant="filled" sx={{ marginBottom: "5px",width: 400 }}/>
                    <Box className="registerOr"></Box>
                    <Button variant="contained" fullWidth sx={{padding:"10px"}}>Sign Up</Button>
                    <Typography variant="h5" gutterBottom sx={{textAlign:"center",justifyContent:"center",marginTop: "20px",fontWeight:"bold", border: 1,padding:"7px",px:"110px",borderRadius: '5px'}}>
                        <Link href="#" sx={{textDecoration: 'none'}}><GoogleIcon/> Sign up with Google</Link>
                    </Typography>
                    <Typography gutterBottom sx={{textAlign:"right",justifyContent:"right",marginTop: "10px"}}>
                       Already have an account?<Link href="#" variant="h5" sx={{fontWeight:"bold",textDecoration: 'none'}}>Sign in</Link>
                    </Typography>
                </FormControl>
                
        </Paper>
    </Container>
  )
}

export default register


{/* 

<Stack spacing={2}> 
<FormControl sx={{ m: 1, width: '25ch' ,bgColor:'#6600ff'}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="password"
            label="Password"
          />
        </FormControl>


<TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                /> */}

{/*import React from 'react'
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
const register = () => {
  return (
    <Container  className='bg-pink-300'>
        <TextField id="filled-basic" label="name" variant="filled" />
        <TextField id="filled-basic" label="name" variant="filled" />
        <TextField id="email" label="Email" type="email" variant="filled"/>
        <Input id="standard-adornment-password" type='password'/>
        <TextField id="filled-basic" label="name" variant="filled" />
        <Button variant="contained">Sign Up</Button>
    </Container>
  )
}

export default register */}




{/*const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      </ThemeProvider> */}