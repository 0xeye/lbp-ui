import { FC } from 'react';
import { Box, Grid, Stack } from '@mui/material';
import { LBPStats } from './LBPStats';
import { LBPContribution } from './LBPContribution';

export const LBP: FC = () => (
  <Stack spacing={6} mb={5} pt={6}>
    <Box>
      <Grid container justifyContent="space-between" mb={4} spacing={{ xs: 2, md: 0 }}>
        <Grid item xs={12} md={8}>
          <LBPStats />
        </Grid>
        <Grid item xs={12} md={4} className="sidebar">
          <Stack spacing={2}>
            <LBPContribution />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  </Stack>
);
