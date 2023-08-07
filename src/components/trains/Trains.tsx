import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrains } from "../../store/trains";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

const Trains: React.FC = () => {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // //TODO: поменять тип any
  // const [items, setItems] = useState<any[]>([]);
  //
  // useEffect(() => {
  //   fetch("https://gist.githubusercontent.com/orlov-oleg-developer/49f08290d1c59a6851e0a0581900e2a7/raw/e5daf87338f3c75165f8edf4c76cc7ec9c2b4aa9/gistfile1.json")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setItems(result);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     )
  // }, [])

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTrains())
  }, [])

  const trains = useAppSelector(state => state.trains.entities)

  return (
    <Paper sx={{ minWidth: 400, overflow: 'hidden' }}>
      <TableContainer sx={{ height: "100vh" }}>
        <Toolbar>
          <Typography variant="h6">
            Поезда
          </Typography>
        </Toolbar>
        < Table stickyHeader
                aria-label="sticky table"
                sx={{ "& .MuiTableRow-root:hover": { backgroundColor: "#cdcdcd", cursor: "pointer" } }}
        >
          <TableHead>
            <TableRow sx={{ backgroundColor: "#efefef" }}>
              <TableCell>Название</TableCell>
              <TableCell align="left">Описание</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trains.map((item) => (
              <TableRow
                key={item.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="left">{item.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default Trains;