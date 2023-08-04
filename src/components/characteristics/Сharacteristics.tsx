import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Container, Toolbar, Typography } from "@mui/material";

const Characteristics: React.FC = () => {
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
            Поезд
          </Typography>
        </Toolbar>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#efefef" }}>
              <TableCell width="33%" align="center" >Ток двигателя</TableCell>
              <TableCell width="33%" align="center">Сила тяги</TableCell>
              <TableCell width="33%" align="center">Скорость</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow>
                <TableCell align="center" contentEditable="true">
                  олорпавап
                </TableCell>
                <TableCell align="center" contentEditable="true">вмвамва</TableCell>
                <TableCell align="center" contentEditable="true">вымвымва</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Button
          variant="outlined"
          sx={{ textTransform: "inherit", color: "inherit", borderColor:"black" }}
        >
          Отправить данные
        </Button>
      </Box>
    </Container>
  )
}

export default Characteristics;