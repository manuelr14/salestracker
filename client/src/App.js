import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function App() {

  return (
    <div>
      <Router>
        <NavBar />
        <Container maxWidth="md" style={{ borderWidth: '1px', border: 'solid', marginBottom: '30px' }}>
          <Typography component="div"  >

            <h1 style={{ textAlign: 'center' }}>(React) Google Books Search</h1>
            <h3 style={{ textAlign: 'center' }}>Search for and Save Books of interests</h3>

          </Typography>
        </Container>
       
        <Route exact path="/" component={Search} />
        <Route exact path="/Search" component={Search} />
        <Route exact path="/Saved" component={Saved} />

      </Router>

    </div>




  );
}


export default App;
