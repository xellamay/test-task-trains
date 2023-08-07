import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Toolbar, Typography } from "@mui/material";
import { fetchTrains, SELECT_TRAIN } from "../../store/trains";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Train } from "../../types/train";

const Trains: React.FC = () => {
  const { entities, loading } = useAppSelector(state => state.trains)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTrains())
  }, [])

  const handleClickRow = (train: Train) => {
    dispatch(SELECT_TRAIN(train));
  }

  return (
    <Paper sx={{ minWidth: 400, overflow: 'hidden' }}>
      <TableContainer sx={{ height: "100vh" }}>
        <Toolbar>
          <Typography variant="h6">
            Поезда
          </Typography>
        </Toolbar>
        <Table
          stickyHeader
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
            {loading === 'pending' && (
              <TableRow>
                <TableCell align="center">Загружаю...</TableCell>
              </TableRow>
            )}
            {loading === 'succeeded' && (
              <>
                {entities.map((train) => (
                  <TableRow
                    key={train.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    onClick={() => handleClickRow(train)}

                  >
                  <TableCell component="th" scope="row">
                    {train.name}
                  </TableCell>
                  <TableCell align="left">
                    {train.description}
                  </TableCell>
                  </TableRow>
                  ))}
              </>
            )}
            {loading === 'failed' && (
              <TableRow>
                <TableCell align="center">Не удалось загрузить</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default Trains;