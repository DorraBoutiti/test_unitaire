import {
    TextField,
    Typography,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid,
    Paper
  } from "@mui/material";
  import { Container } from "@mui/system";
  import React, { useState } from "react";
  import Box from "@mui/material/Box";
  import "./style.css"
  import * as api from "../../../service/enseignant.js";
  import { useNavigate } from "react-router-dom";
import MySideNav from "../../sidenavAdmin";
  
  function CreateEnseignant() {
    const [EnseignantData, setEnseignantData] = useState({
      lastname: "",
      firstname: "",
      email: "",
      login: "",
      password: "",
      phone: "",
      status: "",
      role: "enseignant"
    });
    const navigate = useNavigate();
    const [status, setStatus] = React.useState("");
  
    const handleChange = (e) => {
      setEnseignantData({ ...EnseignantData, [e.target.name]: e.target.value });
      console.log(EnseignantData);
    };

    const handleChangeStatus = (e) => {
        setStatus(e.target.value);
        setEnseignantData({ ...EnseignantData, status: e.target.value });
      };

 
  
    const handleSubmit = async (enseignant) => {
      enseignant.preventDefault();
  
      try {
        const newEnseignant = await api.createEnseignant(EnseignantData);
        console.log(newEnseignant);
        navigate("/readall-enseignant");
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <Container>
                     <MySideNav />

                  <Paper elevation={3} className="paper"> 
                  <Box
          sx={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div       className="grid">
          <Typography component="h1" variant="h5">
            Ajouter un enseignant {" "}
          </Typography>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 12 }}
            >
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="firstname"
                  label="prenom "
                  name="firstname"
                  autoFocus
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="lastname"
                  label="nom"
                  name="lastname"
                  autoFocus
                  onChange={handleChange}
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="email"
                  name="email"
                  autoFocus
                  onChange={handleChange}
                />
               
              </Grid>
              <Grid item xs={6}>
              <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="phone"
                  label="numero de telephone"
                  name="phone"
                  autoFocus
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="login"
                  label="login"
                  name="login"
                  autoFocus
                  onChange={handleChange}
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  label="password"
                  name="password"
                  autoFocus
                  onChange={handleChange}
                />
    <FormControl fullWidth>
                <InputLabel id="staus">Status</InputLabel>
                <Select
                  labelId="status"
                  id="status"
                  value={status}
                  label="status"
                  onChange={handleChangeStatus}
                >
                  <MenuItem value={"enseignant"}>enseignant</MenuItem>
                  <MenuItem value={"responsable formation"}>responsable formation</MenuItem>
                </Select>
              </FormControl>
          
            

              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3, mb: 2 ,
                    m: 4,
                    backgroundColor: "#00A36C",
                    ":hover": { backgroundColor: "#00A36C" },
                  }}
                >
                  Ajouter{" "}
                </Button>
              </Grid>
            </Grid>
          </div>
          </form>
        </Box>
          </Paper>
      </Container>
    );
  }
  
  export default CreateEnseignant;
  