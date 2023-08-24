import {Link as RouterLink} from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';

const formData = {
  email: 'rdthata@gmail.com',
  password: '123456',
  displayName: 'Thamara R'
};

const formValidations = {
    email: [ (value) => value.includes('@'), 'El correo debe tener una @' ],
    password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 caracteres' ],
    displayName: [ (value) => value.length >= 1, 'El nombre es requerido' ]
}

export const RegisterPage = () => {

  const { formState, displayName ,email, password, onInputChange,
          isFormValid, displayNameValid, emailValid, passwordValid} = useForm(formData, formValidations);

  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log(formState);
  }

  return (
   <AuthLayout title='Registro'>

        <form onSubmit={ onSubmit } >
          <Grid container>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label="Nombre completo"
                type="text"
                placeholder="John Doe"
                fullWidth
                name='displayName'
                value={displayName}
                onChange={onInputChange}
                error={!displayNameValid}
                helperText={displayNameValid}
              />
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@dominio.com"
                fullWidth
                name='displayName'
                value={email}
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="******"
                fullWidth
              />
            </Grid>
            <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
            <Grid item xs={12}>
            <Button
            type='submit'
            variant="contained"
            fullWidth
            >
              Crear Cuenta
            </Button>
            </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr: 1}}>¿Ya tienes cuenta?</Typography>
              <Link color='inherit' to='/auth/login' component={RouterLink}>
             ingresar
              </Link>
            </Grid>
          </Grid>
        </form>
   </AuthLayout>

  );
};
