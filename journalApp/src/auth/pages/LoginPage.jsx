import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link as RouterLink} from 'react-router-dom'
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { checkingAutentication, startGoogleSignIn } from '../../store/auth/thunk';

export const LoginPage = () => {

  const { status } = useSelector( state => state.auth );

  const dispatch = useDispatch();

  const { email, password, onInputChange, formState } = useForm({
    email: 'thata@gmail.com',
    password: '123456'
  });

  const isAuthenticating = useMemo( () => status === 'checking', [status] );

  const onSubmit = ( e ) => {
    e.preventDefault();

    console.log({ email, password });

    dispatch(checkingAutentication());
  }

  const onGoogleSignIn = () => {
    console.log('con google');
    dispatch(startGoogleSignIn());
  }

  return (
   <AuthLayout title='Login'>
        <form onSubmit={onSubmit} >
          <Grid container>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@dominio.com"
                fullWidth
                name='email'
                value={ email }
                onChange={ onInputChange }
              />
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="******"
                fullWidth
                name='password'
                value={ password }
                onChange={ onInputChange }
              />
            </Grid>
            <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
            <Grid item xs={12} md={6}>
            <Button
            disabled={isAuthenticating}
            type='submit'
            variant="contained"
            fullWidth
            >
              Login
            </Button>
            </Grid>
            <Grid item xs={12} md={6}>
            <Button
            disabled={isAuthenticating}
            variant="contained"
            fullWidth
            onClick={ onGoogleSignIn }
            >
              <Google />
              <Typography sx={{ml: 1}}>
                Google
              </Typography>
            </Button>
            </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Link color='inherit' to='/auth/register' component={RouterLink}>
             Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
   </AuthLayout>

  );
};
