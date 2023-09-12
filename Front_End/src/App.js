import "./App.css";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

import UpdateProfileEtudiant from "./components/update_etudiant/update_etudiant";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Signin from "./components/signin/signin.js";
import UpdateEtudiantCV from "./components/update_cv/update_cv";
import CreateEnseignant from "./components/crud_enseignant/create_enseignant/create_enseignant";
import UpdateEnseignant from "./components/crud_enseignant/update_enseignant/update_enseignant";
import ReadEnseignant from "./components/crud_enseignant/read_enseignant/read_enseignant";
import CreateEtudiant from "./components/crud_etudiant/create_etudiant/create_etudiant";
import UpdateEtudiant from "./components/crud_etudiant/update_etudiant/update_etudiant";
import ReadEtudiant from "./components/crud_etudiant/read_etudiant/read_etudiant";
import CreateEvenement from "./components/crud_evenement/create_evenement/create_evenement";
import UpdateEvenement from "./components/crud_evenement/update_evenement/update_evenement";
import ReadEvenement from "./components/crud_evenement/read_evenement/read_evenement";
import Administratif from "./components/administratif/index";
import ForgotPassword from "./components/forgot_password/index";
import PasswordReset from "./components/PasswordReset/index";
import PrivateRoute from "./components/PrivateRoutes/privateroute.js";
import EspacEtudiant from "./components/espaceEtudiant/espaceEtudiant";
import SignupAlumni from "./components/compte_alumni/signUpAlumni/index";

import CheckStatus from "./components/compte_alumni/check_status/index"

import ChangePassword from "./components/change_password";
/* export const ThemeContext = createContext(null);
 */
function App() {
  /*   const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }; */

  return (
    /*     <ThemeContext.Provider /* value={{ theme, toggleTheme }} >
     */ <div className="App" /* id={theme} */>
      {/*  <div className="switch">
        <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
      </div> */}
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/signin" />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/change-password" element={<ChangePassword/>}/>
          <Route path="/password-reset/:id/:token" element={<PasswordReset />} />
          <Route path="/signupA" element={<SignupAlumni />} />
          <Route  path="/check"   element={<CheckStatus />}   />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/espace-etudiant" element={<EspacEtudiant />} />
            <Route path="/create-enseignant" element={<CreateEnseignant />} />
            <Route path="/update-enseignant/:id" element={<UpdateEnseignant />} />
            <Route path="/administratif" element={<Administratif />} />
            <Route path="/readall-enseignant" element={<ReadEnseignant />} />
            <Route path="/create-etudiant" element={<CreateEtudiant />} />
            <Route path="/update-etudiant/:id" element={<UpdateEtudiant />} />
            <Route path="/readall-etudiant" element={<ReadEtudiant />} />           
            <Route path="/update-etudiant-cv" element={<UpdateEtudiantCV />} />
            <Route path="/create-evenement" element={<CreateEvenement />} />
            <Route path="/update-evenement/:id" element={<UpdateEvenement />} />
            <Route path="/readall-evenement" element={<ReadEvenement />} />
          </Route>
        </Routes>
      </Router>
    </div>

    // </ThemeContext.Provider>
  );
}

export default App;
