import {
  TextField,
  Typography,
  Button,
  OutlinedInput,
  InputLabel,
  FormControl,
  Grid,
  Link,
  Avatar,
  CssBaseline,
  Paper,
 
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as api from "../../service/authentification.js";
import {  useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function Signin() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [signinData, setSigninData] = useState({ phone: "", password: "" });
  const navigate = useNavigate();

  const handleChangePhone = (e) => {
    setSigninData({ ...signinData, phone: e.target.value });
    console.log(signinData, "signinData");
  };
  const handleChangePassword = (e) => {
    setSigninData({ ...signinData, password: e.target.value });
    /*     console.log(signinData,"signinData");
     */
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data  = await api.signin(signinData);
      if (data.model.role === 'administratif') {
      console.log(data,"data");
      localStorage.setItem('profile', JSON.stringify({ ...data?.model }))
       const token = data.mytoken;
      localStorage.setItem('token', token)
      navigate('/administratif');

    }
    if (data.model.role === 'enseignant') {
      console.log(data,"data");
        localStorage.setItem('profile', JSON.stringify({ ...data?.model }))
         const token = data.mytoken;
        localStorage.setItem('token', token)
        navigate('/readall-enseignant');
  
      }
      if (data.model.role === "enseignant") {
        console.log(data, "data");
        localStorage.setItem("profile", JSON.stringify({ ...data?.model }));
        const token = data.mytoken;
        localStorage.setItem("token", token);
        navigate("/readall-enseignant");
      }
      if (data.model.role === "alumni") {
        console.log(data, "data");
        localStorage.setItem("profile", JSON.stringify({ ...data?.model }));
        const token = data.mytoken;
        localStorage.setItem("token", token);
        navigate("/change-password");
      }

        if (data.model.role === 'etudiant') {

            console.log(data,"data");
            localStorage.setItem('profile', JSON.stringify({ ...data?.model }))
             const token = data.mytoken;
            localStorage.setItem('token', token)
            navigate('/espace-etudiant');

      
          }
          if (data.model.role === 'directeur') {
            console.log(data,"data");
              localStorage.setItem('profile', JSON.stringify({ ...data?.model }))
               const token = data.mytoken;
              localStorage.setItem('token', token)
              navigate('/readall-directeur');
        
            }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container component="main" maxWidth="lg">
     
        <Grid container>
          <CssBaseline />

          <Grid
            component={Paper}
            item
            elevation={6}
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg)",

              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6}>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Se connecter
              </Typography>

              <form onSubmit={handleSubmit}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  autoFocus
                  onChange={handleChangePhone}
                />

                <FormControl
                  fullWidth
                  margin="normal"
                  required
                  label="Mot de passe"
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Mot de passe
                  </InputLabel>
                  <OutlinedInput
                    onChange={handleChangePassword}
                    variant="outlined"
                    type={showPassword ? "text" : "password"}
                    id="password"
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
                </FormControl>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Se connecter
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="/forgot-password" variant="body2">
                      Mot de passe oublié?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      Vous n'avez pas de compte ? S'inscrire
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>
        </Grid>
  
    </Container>
  );
}

export default Signin;
