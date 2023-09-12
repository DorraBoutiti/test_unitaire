import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import * as api from "../../../service/etudiant.js";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import { Box, Button, Typography } from "@mui/material";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import "./style.css";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";

import MySideNav from "../../sidenavAdmin.js";

function ReadEtudiant() {
  const [rows, setRows] = useState([]);
  const [idSelected, setIdSelected] = useState();
const navigate= useNavigate();
  const handleDelete = async () => {
    try {
       await api.deleteEtudiant(idSelected);
       window.location.reload(false)
          } catch (error) {
      console.log(error);
    }
  };

 const handlenavigate = async()=>{
  navigate("/create-etudiant")
 }
 
  const columns = [
    { field: "firstname", headerName: "Nom", width: 130 },
    { field: "lastname", headerName: "Prénom", width: 130 },
    {
      field: "phone",
      headerName: "Numéro de téléphone",
      width: 160,
    },
    {
      field: "Birth_date",
      headerName: "Date de naissance",
      width: 160,
      renderCell: (params) => {
        return (
          <Typography>
            {moment(params.row.Birth_date).format("YYYY-MM-DD")}
          </Typography>
        );
      },
    },
    { field: "niveau", headerName: "Niveau ", width: 130 },
    { field: "classe", headerName: "Classe ", width: 130 },
    { field: "etat", headerName: "etat ", width: 130 },
    {
      field: "modifer",
      headerName: "Modifier",
      width: 130,
      renderCell: (params) => {
        return (
          <Button
            variant="contained"
            href={`/update-etudiant/${idSelected}`}
            sx={{
              backgroundColor: "#00A36C",
              ":hover": { backgroundColor: "#00A36C" },
            }}
          >
            Modifier
          </Button>
        );
      },
    },
    {
      field: "supprimer",
      headerName: "Supprimer",
      width: 130,
      renderCell: (params) => {
        return (
          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
            
              <div>
                <Button
                  variant="contained"
                  {...bindTrigger(popupState)}
                  sx={{
                    backgroundColor: "#FC4343",
                    ":hover": { backgroundColor: "#FC4343" },
                  }}
                >
                  Supprimer
                </Button>
                <Popover
                  {...bindPopover(popupState)}
               
                >
                  <Box
                    sx={{
                      p: 5,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography>
                      Voulez vous vraiment supprimer cet étudiant
                    </Typography>
                    <div className="buttons">
                      <Button
                        variant="contained"
                        className="confirm"
                        sx={{
                          m: 4,
                          backgroundColor: "#00A36C",
                          ":hover": { backgroundColor: "#00A36C" },
                        }}
                        onClick={()=>{handleDelete(); popupState.close()}}
                      >
                        Oui
                      </Button>
                      <Button
                        variant="contained"
                        className="annuler"
                        sx={{
                          backgroundColor: "#FC4343",
                          ":hover": { backgroundColor: "#FC4343" },
                        }}
                        onClick={popupState.close}
>
                        Annuler
                      </Button>
                    </div>
                  </Box>
                </Popover>
              </div>
            )}
          </PopupState>
        );
      },
    },
  
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await api.getAllEtudiant();
        console.log(result);
        setRows(result);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <Container maxWidth="md">
               <MySideNav />

      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ height: 400 }}>
        
          <div style={{display:"flex"}}>
        <IconButton aria-label="add" color="secondary" onClick={handlenavigate} style={{ color:"#000"}} >
  <AddIcon />
</IconButton>

          </div>
          
        <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick

            getRowId={(row) => row._id}
            onRowSelectionModelChange={(newRowSelectionModel) => {
              setIdSelected(newRowSelectionModel.toString());
            }}
          />
        </div>
      </Box>
    </Container>
  );
}

export default ReadEtudiant;
