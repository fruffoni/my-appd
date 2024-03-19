import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Sei</Button>
      <Button variant="contained">Il mio</Button>
      <Button variant="outlined">Pukky</Button>
    </Stack>
  );
}