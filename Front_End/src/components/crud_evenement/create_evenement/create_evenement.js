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
  import * as api from "../../../service/evenement.js";
  import { useNavigate } from "react-router-dom";
import MySideNav from "../../sidenavAdmin";
  

function CreateEvenement() {
  const [EvenementData, setEvenementData] = useState({
    eventName: "",
    eventDate: "",
    eventType: "",
    description: "",
    location: "",
  });
  const navigate = useNavigate();

  const [eventType, setEventType] = React.useState("");

  const handleChange = (e) => {
    setEvenementData({ ...EvenementData, [e.target.name]: e.target.value });
    console.log(EvenementData);
  };

  const handleChangeEventType = (e) => {
    setEventType(e.target.value);
    setEvenementData({ ...EvenementData, eventType: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newEvenement = await api.createEvenement(EvenementData);
      console.log(newEvenement);
      navigate("/readall-evenement");
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
            <div className="grid">
              <Typography component="h1" variant="h5">
                Ajouter un évènement{" "}
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
                    id="eventName"
                    label="titre "
                    name="eventName"
                    autoFocus
                    onChange={handleChange}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="eventDate"
                    label="date"
                    name="eventDate"
                    autoFocus
                    type="date"
                    onChange={handleChange}
                  />
                  <FormControl fullWidth>
                    <InputLabel id="eventType">Type</InputLabel>
                    <Select
                      labelId="eventType"
                      id="eventType"
                      value={eventType}
                      label="Type"
                      name="eventType"
                      onChange={handleChangeEventType}
                    >
                      <MenuItem value={"JPO"}>JPO</MenuItem>
                      <MenuItem value={"Formation"}>Formation</MenuItem>
                      <MenuItem value={"Journée d'integration"}>
                        Journée d'integration
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="description"
                    label="description"
                    name="description"
                    autoFocus
                    onChange={handleChange}
                  />

                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="location"
                    label="location"
                    name="location"
                    autoFocus
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
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

export default CreateEvenement;
