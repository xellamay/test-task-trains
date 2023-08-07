import React from 'react';
import './App.css';
import Trains from "../components/trains/Trains";
import Characteristics from "../components/characteristics/Сharacteristics";
import { Container } from "@mui/material";
import { Provider } from 'react-redux';
import store from "../store/store";

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg" sx={{ display: 'flex' }}>
        <Trains />
        <Characteristics />
      </Container>
    </Provider>
  );
}

export default App;
