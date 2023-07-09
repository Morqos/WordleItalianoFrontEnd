import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 45,
  width: 45
}));

const Board = () => {
  function getCell() {
    return (
      <Grid item xs={2.4} md={2.4}>
        <Item></Item>
      </Grid>
    );
  }

  return (
    <Box sx={{ mt: 5, mx: 'auto', width: 350}}>
      <Grid
        container
        spacing={1}
      >
        {getCell()}
        {getCell()}
        {getCell()}
        {getCell()}
        {getCell()}

        {getCell()}
        {getCell()}
        {getCell()}
        {getCell()}
        {getCell()}

        {getCell()}
        {getCell()}
        {getCell()}
        {getCell()}
        {getCell()}

        {getCell()}
        {getCell()}
        {getCell()}
        {getCell()}
        {getCell()}

        {getCell()}
        {getCell()}
        {getCell()}
        {getCell()}
        {getCell()}

        {getCell()}
        {getCell()}
        {getCell()}
        {getCell()}
        {getCell()}
      </Grid>
    </Box>
  );
}
 
export default Board;