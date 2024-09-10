import React from "react";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import KompleWeb from "./images/kompleweb.jpg";

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Kart Projesi
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ marginTop: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Angular}
              title="Angular"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam iusto nihil ea deserunt culpa, maiores dolores eveniet architecto ratione quasi, odit ipsum minima tenetur nisi vitae eos quaerat in accusamus!"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Bootstrap}
              title="Bootstrap"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam iusto nihil ea deserunt culpa, maiores dolores eveniet architecto ratione quasi, odit ipsum minima tenetur nisi vitae eos quaerat in accusamus!"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Csharp}
              title="Csharp"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam iusto nihil ea deserunt culpa, maiores dolores eveniet architecto ratione quasi, odit ipsum minima tenetur nisi vitae eos quaerat in accusamus!"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={KompleWeb}
              title="KompleWeb"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam iusto nihil ea deserunt culpa, maiores dolores eveniet architecto ratione quasi, odit ipsum minima tenetur nisi vitae eos quaerat in accusamus!"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
