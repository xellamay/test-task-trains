import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { TrainCharacteristics } from "../types/train";
import { CHANGE_CELL, SAVE_CHARACTERISTICS } from "../store/trains";

const CharacteristicsTable: React.FC = () => {
  const { selectedTrain } = useAppSelector((state) => state.trains)
  const dispatch = useAppDispatch()

  if (!selectedTrain) {
    return null;
  }

  const onChange = (cellName: keyof TrainCharacteristics, value: string, index: number) => {
    dispatch(CHANGE_CELL({
      cellName,
      value: Number(value),
      index
    }))
  }

  const handleClickSave = () => {
    dispatch(SAVE_CHARACTERISTICS())
  }

  return (
    <Container>
      <TableContainer sx={{ maxWidth: 750, height: "fit-content" }} component={Paper}>
        <Toolbar>
          <Typography variant="h6">
            Характеристики
          </Typography>
        </Toolbar>
        <Toolbar>
          <Typography variant="h6">
            {selectedTrain.name}
          </Typography>
        </Toolbar>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#efefef" }}>
              <TableCell width="33%" align="center">Ток двигателя</TableCell>
              <TableCell width="33%" align="center">Сила тяги</TableCell>
              <TableCell width="33%" align="center">Скорость</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedTrain.characteristics.map((row, index) => (
              <TableRow
                key={`${row.speed}/${row.force}/${row.engineAmperage}`}
              >
                <TableCell
                  align="center"
                  contentEditable="true"
                  onBlur={(event) => {
                    const value = event.target.innerText;
                    onChange('engineAmperage', value, index);
                  }}
                  suppressContentEditableWarning={true}
                >
                  {row.engineAmperage}
                </TableCell>
                <TableCell
                  align="center"
                  contentEditable="true"
                  onBlur={(event) => {
                    const value = event.target.innerText;
                    onChange('force', value, index);
                  }}
                  suppressContentEditableWarning={true}
                >
                  {row.force}
                </TableCell>
                <TableCell
                  align="center"
                  contentEditable="true"
                  onBlur={(event) => {
                    const value = event.target.innerText;
                    onChange('speed', value, index);
                  }}
                  suppressContentEditableWarning={true}
                >
                  {row.speed}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Button
          variant="outlined"
          sx={{ textTransform: "inherit", color: "inherit", borderColor:"black" }}
          onClick={handleClickSave}
        >
          Отправить данные
        </Button>
      </Box>
    </Container>
  )
}

export default CharacteristicsTable;