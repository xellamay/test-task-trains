import React from 'react';
import './App.css';
import TrainsTable from "../components/TrainsTable";
import CharacteristicsTable from "../components/СharacteristicsTable";
import { Container } from "@mui/material";
import { Provider } from 'react-redux';
import store from "../store/store";

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg" sx={{ display: 'flex' }}>
        <TrainsTable />
        <CharacteristicsTable />
      </Container>
    </Provider>
  );
}

export default App;
