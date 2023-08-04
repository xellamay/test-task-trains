import React from 'react';
import './App.css';
import Trains from "../components/trains/Trains";
import Characteristics from "../components/characteristics/Сharacteristics";
import { Container } from "@mui/material";

function App() {
  return (
    <Container maxWidth="lg" sx={{ display: 'flex' }}>
      <Trains />
      <Characteristics />
    </Container>
  );
}

export default App;
